import { Outlet, NavLink } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'

function PublicLayout() {
  const { user, logout } = useAuthStore()
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Emrs-logo.png" alt="EMRS Logo" className="h-10 w-auto" />
              <div className="leading-tight">
                <div className="font-bold text-primary-700 tracking-tight">EMRS Dornala</div>
                <div className="text-xs text-gray-500">Distt. Prakasam, Andhra Pradesh</div>
              </div>
            </NavLink>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <NavLink to="/" className={({isActive}) => `hover:text-primary-700 ${isActive ? 'text-primary-700' : 'text-gray-700'}`}>Home</NavLink>
              <NavLink to="/meet-us" className={({isActive}) => `hover:text-primary-700 ${isActive ? 'text-primary-700' : 'text-gray-700'}`}>Meet Us</NavLink>
              <NavLink to="/campus-life" className={({isActive}) => `hover:text-primary-700 ${isActive ? 'text-primary-700' : 'text-gray-700'}`}>Campus Life</NavLink>
              <NavLink to="/news-events" className={({isActive}) => `hover:text-primary-700 ${isActive ? 'text-primary-700' : 'text-gray-700'}`}>News & Events</NavLink>
              <NavLink to="/admissions" className={({isActive}) => `hover:text-primary-700 ${isActive ? 'text-primary-700' : 'text-gray-700'}`}>Admissions</NavLink>
              <NavLink to="/achievements" className={({isActive}) => `hover:text-primary-700 ${isActive ? 'text-primary-700' : 'text-gray-700'}`}>Achievements</NavLink>
              <NavLink to="/contact" className={({isActive}) => `hover:text-primary-700 ${isActive ? 'text-primary-700' : 'text-gray-700'}`}>Contact</NavLink>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              {!user && <NavLink to="/login" className="px-3 py-2 text-sm font-semibold text-primary-700">Log in</NavLink>}
              {!user && <NavLink to="/register" className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-md">Apply Now</NavLink>}
              {user && (
                <>
                  <NavLink to={user.role === 'teacher' ? '/dashboard/teacher' : '/dashboard/student'} className="px-3 py-2 text-sm font-semibold text-primary-700">Dashboard</NavLink>
                  <button onClick={logout} className="px-4 py-2 text-sm font-semibold text-white bg-gray-800 hover:bg-black rounded-md">Logout</button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-16 border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div>© {new Date().getFullYear()} EMRS Dornala. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="https://niets.tribal.gov.in/" target="_blank" className="hover:text-primary-700">NESTS</a>
            <a href="https://www.cbse.gov.in/" target="_blank" className="hover:text-primary-700">CBSE</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PublicLayout

