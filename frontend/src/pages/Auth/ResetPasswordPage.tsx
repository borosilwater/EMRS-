import { useState } from 'react'
import { api } from '@/lib/api'

function ResetPasswordPage() {
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [ok, setOk] = useState('')
  async function onSubmit() {
    if (password !== confirm) return
    await api.post('/auth/reset', { token, password })
    setOk('Password updated. You may log in now.')
  }
  return (
    <div className="min-h-[80vh] grid place-items-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h1 className="text-2xl font-bold text-center">Reset password</h1>
        <p className="mt-2 text-center text-sm text-gray-600">Enter a new password for your account</p>
        <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); onSubmit() }}>
          <div>
            <label className="block text-sm font-medium">Reset Token</label>
            <input value={token} onChange={(e) => setToken(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">New Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Update password</button>
          {ok && <div className="text-xs text-green-700">{ok}</div>}
        </form>
      </div>
    </div>
  )
}

export default ResetPasswordPage

