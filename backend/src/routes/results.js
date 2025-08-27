const { Router } = require('express')
const { getDb } = require('../db')
const { authMiddleware, requireRole } = require('../utils/jwt')

const router = Router()

router.get('/results/:studentId', authMiddleware, (req, res) => {
  const studentId = Number(req.params.studentId)
  if (!studentId) return res.status(400).json({ error: 'Invalid student id' })
  const db = getDb()
  const rows = db.prepare('SELECT * FROM results WHERE student_id = ? ORDER BY date DESC').all(studentId)
  res.json(rows)
})

router.post('/results', authMiddleware, requireRole('teacher'), (req, res) => {
  const { student_id, exam, score, date } = req.body
  if (!student_id || !exam || !score) return res.status(400).json({ error: 'Missing fields' })
  const db = getDb()
  const r = db.prepare('INSERT INTO results (student_id, exam, score, date) VALUES (?,?,?,?)').run(student_id, exam, score, date || new Date().toISOString())
  res.json({ id: r.lastInsertRowid })
})

module.exports = router

