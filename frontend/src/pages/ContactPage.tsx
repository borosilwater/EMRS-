import { useState } from 'react'
import { api } from '@/lib/api'

function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [ok, setOk] = useState('')
  async function onSubmit() {
    await api.post('/contact', { name, email, message })
    setOk('Thanks! We will get back to you soon.')
    setName(''); setEmail(''); setMessage('')
  }
  return (
    <div>
      <div className="h-48 bg-gradient-to-r from-primary-600 to-primary-800 text-white grid place-items-center">
        <h1 className="text-3xl font-extrabold">Contact Us</h1>
      </div>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold">EMRS Dornala</h2>
          <p className="mt-2 text-gray-700">Distt. Prakasam, Andhra Pradesh</p>
          <p className="mt-2 text-gray-700">Email: contact@emrs-dornala.edu.in</p>
          <p className="mt-2 text-gray-700">Phone: +91-00000-00000</p>
          <div className="mt-6 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop" alt="Campus" className="w-full h-64 object-cover" />
          </div>
        </div>
        <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); onSubmit() }}>
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <button type="submit" className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Send</button>
          {ok && <div className="text-xs text-green-700">{ok}</div>}
        </form>
      </section>
    </div>
  )
}

export default ContactPage

