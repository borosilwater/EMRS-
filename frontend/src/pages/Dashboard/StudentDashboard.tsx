import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/auth'
import { api } from '@/lib/api'

type Result = { id: number; exam: string; score: string; date: string }

function StudentDashboard() {
  const { user } = useAuthStore()
  const [results, setResults] = useState<Result[]>([])
  useEffect(() => {
    if (!user) return
    api.get(`/results/${user.id}`).then((res) => setResults(res.data))
  }, [user])
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
            <div><span className="font-medium">Name:</span> {user?.name}</div>
            <div><span className="font-medium">Email:</span> {user?.email}</div>
            <div><span className="font-medium">Role:</span> {user?.role}</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h2 className="font-semibold">My Results</h2>
          <div className="mt-3 text-sm text-gray-700 grid gap-2">
            {results.length === 0 && <div className="text-gray-500">No results yet</div>}
            {results.map((r) => (
              <div key={r.id} className="rounded border border-gray-200 p-3">
                {r.exam}: {r.score} <span className="text-xs text-gray-500">({new Date(r.date).toDateString()})</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentDashboard

