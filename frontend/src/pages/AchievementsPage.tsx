function AchievementsPage() {
  const achievements = [
    { title: 'State-level Science Fair Winners', desc: 'Team EMRS Dornala won first prize at state science fair 2024.' },
    { title: 'Sports Championship', desc: 'Girls football team clinched inter-district championship 2025.' },
    { title: '100% Board Results in Grade X', desc: 'All students passed with distinction in CBSE Grade X.' },
  ]

  return (
    <div>
      <div className="h-48 bg-gradient-to-r from-primary-600 to-primary-800 text-white grid place-items-center">
        <h1 className="text-3xl font-extrabold">Achievements</h1>
      </div>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 grid gap-6">
        {achievements.map((a) => (
          <div key={a.title} className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
            <h3 className="font-semibold text-lg">{a.title}</h3>
            <p className="mt-2 text-gray-700">{a.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default AchievementsPage

