function CampusLifePage() {
  const sections = [
    { title: 'Facilities', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop', desc: 'Digital classrooms, STEM labs, library, sports grounds, arts and music rooms.' },
    { title: 'Safety & Security', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop', desc: '24x7 surveillance, wardens, healthcare, and safety drills ensure wellbeing.' },
    { title: 'Rules', img: 'https://images.unsplash.com/photo-1535525153412-5a4acb4c9a3c?q=80&w=1200&auto=format&fit=crop', desc: 'Respect, discipline, punctuality, cleanliness, and academic integrity are core.' },
    { title: 'Student Chapter', img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop', desc: 'Clubs and committees for STEM, culture, environment, literature, and sports.' },
  ]

  return (
    <div>
      <div className="h-48 bg-gradient-to-r from-primary-600 to-primary-800 text-white grid place-items-center">
        <h1 className="text-3xl font-extrabold">Campus Life</h1>
      </div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {sections.map((s) => (
          <div key={s.title} className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm">
            <img src={s.img} className="h-40 w-full object-cover" alt={s.title} />
            <div className="p-5">
              <div className="font-semibold text-lg">{s.title}</div>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default CampusLifePage

