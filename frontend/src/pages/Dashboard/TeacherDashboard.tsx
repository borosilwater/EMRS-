function TeacherDashboard() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
        <p className="text-gray-600">Manage announcements, news, results, and gallery.</p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 grid gap-3">
          <h2 className="font-semibold">Post Announcement</h2>
          <input placeholder="Title" className="rounded-md border-gray-300" />
          <textarea placeholder="Content" className="rounded-md border-gray-300" rows={4} />
          <button type="button" className="self-start px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Publish</button>
        </form>

        <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 grid gap-3">
          <h2 className="font-semibold">Add News/Event</h2>
          <input placeholder="Title" className="rounded-md border-gray-300" />
          <input type="date" className="rounded-md border-gray-300" />
          <input placeholder="Image URL" className="rounded-md border-gray-300" />
          <button type="button" className="self-start px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Add</button>
        </form>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 grid gap-3">
          <h2 className="font-semibold">Upload Result</h2>
          <input placeholder="Student ID" className="rounded-md border-gray-300" />
          <input placeholder="Exam" className="rounded-md border-gray-300" />
          <input placeholder="Score" className="rounded-md border-gray-300" />
          <button type="button" className="self-start px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Upload</button>
        </form>

        <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 grid gap-3">
          <h2 className="font-semibold">Post Gallery Image</h2>
          <input placeholder="Caption" className="rounded-md border-gray-300" />
          <input placeholder="Image URL" className="rounded-md border-gray-300" />
          <button type="button" className="self-start px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Post</button>
        </form>
      </section>
    </div>
  )
}

export default TeacherDashboard

