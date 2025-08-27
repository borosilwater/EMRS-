import { useEffect, useState } from 'react'
import { api } from '@/lib/api'

type Ach = { id: number; title: string; description: string }

function AchievementsPage() {
  const [achievements, setAchievements] = useState<Ach[]>([])
  useEffect(() => {
    api.get('/achievements').then((res) => setAchievements(res.data))
  }, [])

  return (
    <div>
      <div className="h-48 bg-gradient-to-r from-primary-600 to-primary-800 text-white grid place-items-center">
        <h1 className="text-3xl font-extrabold">Achievements</h1>
      </div>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 grid gap-6">
        {achievements.map((a) => (
          <div key={a.title} className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
            <h3 className="font-semibold text-lg">{a.title}</h3>
            <p className="mt-2 text-gray-700">{a.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default AchievementsPage

