import { Outlet, NavLink } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className="min-h-screen grid grid-cols-12">
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 border-r border-gray-100 bg-gray-50">
        <div className="p-4 font-bold text-primary-700">EMRS Admin</div>
        <nav className="flex flex-col p-2 text-sm">
          <NavLink to="/dashboard/teacher" className={({isActive}) => `px-3 py-2 rounded ${isActive ? 'bg-primary-100 text-primary-800' : 'hover:bg-gray-100'}`}>Teacher</NavLink>
          <NavLink to="/dashboard/student" className={({isActive}) => `px-3 py-2 rounded ${isActive ? 'bg-primary-100 text-primary-800' : 'hover:bg-gray-100'}`}>Student</NavLink>
        </nav>
      </aside>
      <section className="col-span-12 md:col-span-9 lg:col-span-10 p-6">
        <Outlet />
      </section>
    </div>
  )
}

export default DashboardLayout

