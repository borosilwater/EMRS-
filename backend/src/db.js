const Database = require('better-sqlite3')
const path = require('path')
const bcrypt = require('bcryptjs')

let db

function initDb() {
  if (db) return db
  const dbPath = path.join(__dirname, '..', 'data.sqlite')
  db = new Database(dbPath)
  db.pragma('journal_mode = WAL')

  // Schema
  db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT,
    role TEXT NOT NULL DEFAULT 'student',
    google_id TEXT UNIQUE,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS reset_tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    token TEXT NOT NULL,
    expires_at INTEGER NOT NULL,
    used INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS announcements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_by INTEGER,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    image_url TEXT
  );

  CREATE TABLE IF NOT EXISTS achievements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS gallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    caption TEXT,
    image_url TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    exam TEXT NOT NULL,
    score TEXT NOT NULL,
    date TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(student_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
  `)

  // Seed teacher if none
  const teacherCount = db.prepare('SELECT COUNT(*) as c FROM users WHERE role = ?').get('teacher').c
  if (teacherCount === 0) {
    const hash = bcrypt.hashSync('teacher123', 10)
    db.prepare('INSERT INTO users (name, email, password_hash, role) VALUES (?,?,?,?)')
      .run('Teacher Admin', 'teacher@emrs-dornala.edu.in', hash, 'teacher')
  }

  // Seed achievements/news if empty
  const achCount = db.prepare('SELECT COUNT(*) as c FROM achievements').get().c
  if (achCount === 0) {
    const insertAch = db.prepare('INSERT INTO achievements (title, description) VALUES (?,?)')
    insertAch.run('State-level Science Fair Winners', 'Team EMRS Dornala won first prize at state science fair 2024.')
    insertAch.run('Sports Championship', 'Girls football team clinched inter-district championship 2025.')
    insertAch.run('100% Board Results in Grade X', 'All students passed with distinction in CBSE Grade X.')
  }

  const newsCount = db.prepare('SELECT COUNT(*) as c FROM news').get().c
  if (newsCount === 0) {
    const insertNews = db.prepare('INSERT INTO news (title, date, image_url) VALUES (?,?,?)')
    insertNews.run('STEM Lab Inauguration', '2025-08-15', 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop')
    insertNews.run('Inter-school Sports Meet', '2025-07-22', 'https://images.unsplash.com/photo-1526676037777-05a232554f38?q=80&w=1200&auto=format&fit=crop')
    insertNews.run('Cultural Fest', '2025-06-01', 'https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=1200&auto=format&fit=crop')
  }

  const annCount = db.prepare('SELECT COUNT(*) as c FROM announcements').get().c
  if (annCount === 0) {
    const insertAnn = db.prepare('INSERT INTO announcements (title, content, created_by) VALUES (?,?,?)')
    insertAnn.run('Admissions 2025-26', 'Admissions for the academic year 2025-26 are open', 1)
    insertAnn.run('STEM Lab', 'New STEM lab inaugurated', 1)
  }

  return db
}

function getDb() {
  if (!db) return initDb()
  return db
}

module.exports = { initDb, getDb }

