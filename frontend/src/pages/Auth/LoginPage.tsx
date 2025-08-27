import { NavLink } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="min-h-[80vh] grid place-items-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h1 className="text-2xl font-bold text-center">Welcome back</h1>
        <p className="mt-2 text-center text-sm text-gray-600">Log in to EMRS Dornala</p>
        <form className="mt-6 grid gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <div className="flex items-center justify-between">
            <NavLink to="/forgot-password" className="text-sm text-primary-700">Forgot password?</NavLink>
          </div>
          <button type="button" className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Log In</button>
          <button type="button" className="w-full px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-md font-semibold flex items-center justify-center gap-2">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" />
            Continue with Google
          </button>
        </form>
        <p className="mt-4 text-center text-sm">Don’t have an account? <NavLink to="/register" className="text-primary-700">Register</NavLink></p>
      </div>
    </div>
  )
}

export default LoginPage

