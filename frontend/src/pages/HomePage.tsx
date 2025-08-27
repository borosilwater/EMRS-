import { NavLink } from 'react-router-dom'
import AnnouncementBar from '@/components/AnnouncementBar'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import GalleryGrid from '@/components/GalleryGrid'

type Announcement = { id: number; title: string; content: string }

function HomePage() {
  const [anns, setAnns] = useState<Announcement[]>([])
  useEffect(() => {
    api.get('/announcements').then((res) => setAnns(res.data))
  }, [])
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
          alt="School campus"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative bg-black/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-white">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">EMRS Dornala</h1>
            <p className="mt-4 max-w-2xl text-white/90">Distt. Prakasam, Andhra Pradesh — Empowering tribal students with holistic education, state-of-the-art facilities, and a nurturing environment.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <NavLink to="/admissions" className="px-5 py-3 bg-primary-600 hover:bg-primary-700 rounded-md font-semibold">Apply for Admission</NavLink>
              <NavLink to="/meet-us" className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-md font-semibold">Meet Us</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement ticker */}
      <AnnouncementBar items={anns.length ? anns.map(a => a.title) : ["Admissions for 2025-26 are open","EMRS students achieved 98% pass rate","New STEM lab inaugurated","Affiliated to CBSE under NESTS"]} />

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Holistic Education', img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop', desc: 'Academic excellence with focus on culture, sports, and life skills.' },
            { title: 'Safe Residential Campus', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop', desc: '24x7 safety, healthcare, nutritious meals, and caring mentors.' },
            { title: 'Modern Facilities', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop', desc: 'Digital classrooms, STEM labs, library, sports, arts, and more.' }
          ].map((card) => (
            <div key={card.title} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white">
              <img src={card.img} className="h-44 w-full object-cover" alt={card.title} />
              <div className="p-5">
                <div className="font-semibold text-lg">{card.title}</div>
                <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <GalleryGrid />
    </div>
  )
}

export default HomePage

