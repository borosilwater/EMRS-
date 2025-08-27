const { Router } = require('express')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { getDb } = require('../db')
const { signToken } = require('../utils/jwt')

const router = Router()

// Passport Google OAuth setup
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID || 'placeholder',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'placeholder',
  callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:4000/api/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  try {
    const db = getDb()
    const existing = db.prepare('SELECT * FROM users WHERE google_id = ?').get(profile.id)
    if (existing) return done(null, existing)
    const email = profile.emails && profile.emails[0] ? profile.emails[0].value : `${profile.id}@google.local`
    const name = profile.displayName || 'Google User'
    const info = db.prepare('INSERT INTO users (name, email, role, google_id) VALUES (?,?,?,?)').run(name, email, 'student', profile.id)
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(info.lastInsertRowid)
    done(null, user)
  } catch (e) {
    done(e)
  }
}))

router.post('/register', (req, res) => {
  const { name, email, password, role } = req.body
  if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' })
  const db = getDb()
  const exists = db.prepare('SELECT id FROM users WHERE email = ?').get(email)
  if (exists) return res.status(409).json({ error: 'Email already in use' })
  const hash = bcrypt.hashSync(password, 10)
  const r = db.prepare('INSERT INTO users (name, email, password_hash, role) VALUES (?,?,?,?)').run(name, email, hash, role === 'teacher' ? 'teacher' : 'student')
  const user = db.prepare('SELECT id, name, email, role FROM users WHERE id = ?').get(r.lastInsertRowid)
  const token = signToken(user)
  return res.json({ token, user })
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' })
  const db = getDb()
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
  if (!user || !user.password_hash) return res.status(401).json({ error: 'Invalid credentials' })
  const ok = bcrypt.compareSync(password, user.password_hash)
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' })
  const payload = { id: user.id, name: user.name, email: user.email, role: user.role }
  const token = signToken(payload)
  return res.json({ token, user: payload })
})

router.post('/forgot', (req, res) => {
  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email required' })
  const db = getDb()
  const user = db.prepare('SELECT id FROM users WHERE email = ?').get(email)
  if (!user) return res.json({ ok: true })
  const token = Math.random().toString(36).slice(2)
  const expires = Date.now() + 1000 * 60 * 30
  db.prepare('INSERT INTO reset_tokens (user_id, token, expires_at) VALUES (?,?,?)').run(user.id, token, expires)
  // In real app: email this token link to user
  return res.json({ ok: true, token })
})

router.post('/reset', (req, res) => {
  const { token, password } = req.body
  if (!token || !password) return res.status(400).json({ error: 'Missing fields' })
  const db = getDb()
  const row = db.prepare('SELECT * FROM reset_tokens WHERE token = ? AND used = 0').get(token)
  if (!row) return res.status(400).json({ error: 'Invalid token' })
  if (Date.now() > row.expires_at) return res.status(400).json({ error: 'Token expired' })
  const hash = bcrypt.hashSync(password, 10)
  db.prepare('UPDATE users SET password_hash = ? WHERE id = ?').run(hash, row.user_id)
  db.prepare('UPDATE reset_tokens SET used = 1 WHERE id = ?').run(row.id)
  return res.json({ ok: true })
})

// Google OAuth endpoints
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/login` }), (req, res) => {
  const user = { id: req.user.id, name: req.user.name, email: req.user.email, role: req.user.role }
  const token = signToken(user)
  const redirectUrl = new URL(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/login`)
  redirectUrl.searchParams.set('token', token)
  redirectUrl.searchParams.set('user', JSON.stringify(user))
  return res.redirect(redirectUrl.toString())
})

module.exports = router

