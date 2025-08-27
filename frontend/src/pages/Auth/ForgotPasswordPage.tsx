function ForgotPasswordPage() {
  return (
    <div className="min-h-[80vh] grid place-items-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h1 className="text-2xl font-bold text-center">Forgot password</h1>
        <p className="mt-2 text-center text-sm text-gray-600">Enter your email to receive reset link</p>
        <form className="mt-6 grid gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <button type="button" className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Send reset link</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordPage

