import { useEffect, useState } from 'react'
import { api } from '@/lib/api'

type News = { id: number; title: string; date: string; image_url?: string }

function NewsEventsPage() {
  const [items, setItems] = useState<News[]>([])
  useEffect(() => {
    api.get('/news').then((res) => setItems(res.data))
  }, [])

  return (
    <div>
      <div className="h-48 bg-gradient-to-r from-primary-600 to-primary-800 text-white grid place-items-center">
        <h1 className="text-3xl font-extrabold">News & Events</h1>
      </div>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm">
            <img src={item.image_url || 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop'} className="h-44 w-full object-cover" alt={item.title} />
            <div className="p-5">
              <div className="text-xs text-gray-500">{new Date(item.date).toDateString()}</div>
              <h3 className="mt-1 font-semibold text-lg">{item.title}</h3>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default NewsEventsPage

