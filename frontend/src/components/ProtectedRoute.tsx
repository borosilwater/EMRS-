import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'

type Props = {
  allow: Array<'student' | 'teacher'>
}

function ProtectedRoute({ allow }: Props) {
  const { token, user } = useAuthStore()
  if (!token || !user) {
    return <Navigate to="/login" replace />
  }
  if (!allow.includes(user.role)) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}

export default ProtectedRoute

