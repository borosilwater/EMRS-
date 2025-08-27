function StudentDashboard() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <p className="text-gray-600">View your profile and results.</p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h2 className="font-semibold">My Profile</h2>
          <div className="mt-3 text-sm text-gray-700 grid gap-1">
            <div><span className="font-medium">Name:</span> John Doe</div>
            <div><span className="font-medium">Class:</span> X</div>
            <div><span className="font-medium">Roll No:</span> 42</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h2 className="font-semibold">My Results</h2>
          <div className="mt-3 text-sm text-gray-700 grid gap-2">
            <div className="rounded border border-gray-200 p-3">Mid-Term 2025: 88%</div>
            <div className="rounded border border-gray-200 p-3">Unit Test 2: 82%</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentDashboard

