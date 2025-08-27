type Props = { items: string[] }

function AnnouncementBar({ items }: Props) {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3 overflow-hidden">
        <span className="px-3 py-1 text-xs font-bold rounded bg-primary-100 text-primary-800 shrink-0">Announcements</span>
        <div className="relative flex-1 overflow-hidden">
          <div className="whitespace-nowrap animate-[ticker_25s_linear_infinite] text-sm text-gray-700">
            {items.join('    |    ')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnnouncementBar

