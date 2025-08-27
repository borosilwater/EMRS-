import { create } from 'zustand'

export type UserRole = 'student' | 'teacher'

type User = {
  id: string
  name: string
  email: string
  role: UserRole
}

type AuthState = {
  token: string | null
  user: User | null
  loading: boolean
  login: (payload: { token: string; user: User }) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  user: typeof window !== 'undefined' && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) as User : null,
  loading: false,
  login: ({ token, user }) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    set({ token, user })
  },
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    set({ token: null, user: null })
  },
}))

