const { Router } = require('express')
const { getDb } = require('../db')
const { authMiddleware, requireRole } = require('../utils/jwt')

const router = Router()

// Announcements
router.get('/announcements', (req, res) => {
  const db = getDb()
  const rows = db.prepare('SELECT * FROM announcements ORDER BY created_at DESC LIMIT 20').all()
  res.json(rows)
})

router.post('/announcements', authMiddleware, requireRole('teacher'), (req, res) => {
  const { title, content } = req.body
  if (!title || !content) return res.status(400).json({ error: 'Missing fields' })
  const db = getDb()
  const r = db.prepare('INSERT INTO announcements (title, content, created_by) VALUES (?,?,?)').run(title, content, req.user.id)
  res.json({ id: r.lastInsertRowid })
})

// News
router.get('/news', (req, res) => {
  const db = getDb()
  const rows = db.prepare('SELECT * FROM news ORDER BY date DESC LIMIT 50').all()
  res.json(rows)
})

router.post('/news', authMiddleware, requireRole('teacher'), (req, res) => {
  const { title, date, image_url } = req.body
  if (!title || !date) return res.status(400).json({ error: 'Missing fields' })
  const db = getDb()
  const r = db.prepare('INSERT INTO news (title, date, image_url) VALUES (?,?,?)').run(title, date, image_url || null)
  res.json({ id: r.lastInsertRowid })
})

// Achievements
router.get('/achievements', (req, res) => {
  const db = getDb()
  const rows = db.prepare('SELECT * FROM achievements ORDER BY id DESC LIMIT 50').all()
  res.json(rows)
})

router.post('/achievements', authMiddleware, requireRole('teacher'), (req, res) => {
  const { title, description } = req.body
  if (!title || !description) return res.status(400).json({ error: 'Missing fields' })
  const db = getDb()
  const r = db.prepare('INSERT INTO achievements (title, description) VALUES (?,?)').run(title, description)
  res.json({ id: r.lastInsertRowid })
})

// Gallery
router.get('/gallery', (req, res) => {
  const db = getDb()
  const rows = db.prepare('SELECT * FROM gallery ORDER BY created_at DESC LIMIT 50').all()
  res.json(rows)
})

router.post('/gallery', authMiddleware, requireRole('teacher'), (req, res) => {
  const { caption, image_url } = req.body
  if (!image_url) return res.status(400).json({ error: 'Missing image_url' })
  const db = getDb()
  const r = db.prepare('INSERT INTO gallery (caption, image_url) VALUES (?,?)').run(caption || null, image_url)
  res.json({ id: r.lastInsertRowid })
})

// Contact messages
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })
  const db = getDb()
  const r = db.prepare('INSERT INTO contact_messages (name, email, message) VALUES (?,?,?)').run(name, email, message)
  res.json({ id: r.lastInsertRowid })
})

module.exports = router

