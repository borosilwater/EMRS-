import { useState } from 'react'
import { api } from '@/lib/api'

function TeacherDashboard() {
  const [ann, setAnn] = useState({ title: '', content: '' })
  const [news, setNews] = useState({ title: '', date: '', image_url: '' })
  const [result, setResult] = useState({ student_id: '', exam: '', score: '' })
  const [gallery, setGallery] = useState({ caption: '', image_url: '' })
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
        <p className="text-gray-600">Manage announcements, news, results, and gallery.</p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 grid gap-3" onSubmit={(e) => { e.preventDefault(); api.post('/announcements', ann) }}>
          <h2 className="font-semibold">Post Announcement</h2>
          <input placeholder="Title" value={ann.title} onChange={(e) => setAnn({ ...ann, title: e.target.value })} className="rounded-md border-gray-300" />
          <textarea placeholder="Content" value={ann.content} onChange={(e) => setAnn({ ...ann, content: e.target.value })} className="rounded-md border-gray-300" rows={4} />
          <button type="submit" className="self-start px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Publish</button>
        </form>

        <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 grid gap-3" onSubmit={(e) => { e.preventDefault(); api.post('/news', news) }}>
          <h2 className="font-semibold">Add News/Event</h2>
          <input placeholder="Title" value={news.title} onChange={(e) => setNews({ ...news, title: e.target.value })} className="rounded-md border-gray-300" />
          <input type="date" value={news.date} onChange={(e) => setNews({ ...news, date: e.target.value })} className="rounded-md border-gray-300" />
          <input placeholder="Image URL" value={news.image_url} onChange={(e) => setNews({ ...news, image_url: e.target.value })} className="rounded-md border-gray-300" />
          <button type="submit" className="self-start px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Add</button>
        </form>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 grid gap-3" onSubmit={(e) => { e.preventDefault(); api.post('/results', { ...result, student_id: Number(result.student_id) }) }}>
          <h2 className="font-semibold">Upload Result</h2>
          <input placeholder="Student ID" value={result.student_id} onChange={(e) => setResult({ ...result, student_id: e.target.value })} className="rounded-md border-gray-300" />
          <input placeholder="Exam" value={result.exam} onChange={(e) => setResult({ ...result, exam: e.target.value })} className="rounded-md border-gray-300" />
          <input placeholder="Score" value={result.score} onChange={(e) => setResult({ ...result, score: e.target.value })} className="rounded-md border-gray-300" />
          <button type="submit" className="self-start px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Upload</button>
        </form>

        <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 grid gap-3" onSubmit={(e) => { e.preventDefault(); api.post('/gallery', gallery) }}>
          <h2 className="font-semibold">Post Gallery Image</h2>
          <input placeholder="Caption" value={gallery.caption} onChange={(e) => setGallery({ ...gallery, caption: e.target.value })} className="rounded-md border-gray-300" />
          <input placeholder="Image URL" value={gallery.image_url} onChange={(e) => setGallery({ ...gallery, image_url: e.target.value })} className="rounded-md border-gray-300" />
          <button type="submit" className="self-start px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Post</button>
        </form>
      </section>
    </div>
  )
}

export default TeacherDashboard

