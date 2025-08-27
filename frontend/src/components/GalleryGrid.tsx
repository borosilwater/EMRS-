import { useEffect, useState } from 'react'
import { api } from '@/lib/api'

type Item = { id: number; caption?: string; image_url: string }

function GalleryGrid() {
  const [items, setItems] = useState<Item[]>([])
  useEffect(() => {
    api.get('/gallery').then((res) => setItems(res.data))
  }, [])
  if (items.length === 0) return null
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold">Campus Gallery</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.slice(0, 8).map((g) => (
          <figure key={g.id} className="relative rounded-lg overflow-hidden border border-gray-100">
            <img src={g.image_url} alt={g.caption || 'Gallery'} className="h-40 w-full object-cover" />
            {g.caption && (
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">{g.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  )
}

export default GalleryGrid

