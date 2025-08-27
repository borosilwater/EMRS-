import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '@/lib/api'
import { useAuthStore } from '@/store/auth'

function RegisterPage() {
  const navigate = useNavigate()
  const { login } = useAuthStore()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function onSubmit() {
    setError('')
    try {
      const res = await api.post('/auth/register', { name, email, password })
      login(res.data)
      navigate('/dashboard/student')
    } catch (e) {
      setError('Registration failed')
    }
  }

  return (
    <div className="min-h-[80vh] grid place-items-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h1 className="text-2xl font-bold text-center">Create account</h1>
        <p className="mt-2 text-center text-sm text-gray-600">Join EMRS Dornala portal</p>
        <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); onSubmit() }}>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Register</button>
          <a href="/api/auth/google" className="w-full px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-md font-semibold flex items-center justify-center gap-2">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" />
            Sign up with Google
          </a>
        </form>
        <p className="mt-4 text-center text-sm">Already have an account? <NavLink to="/login" className="text-primary-700">Log in</NavLink></p>
      </div>
    </div>
  )
}

export default RegisterPage

