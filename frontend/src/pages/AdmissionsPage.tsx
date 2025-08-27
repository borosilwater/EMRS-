function AdmissionsPage() {
  return (
    <div>
      <div className="h-48 bg-gradient-to-r from-primary-600 to-primary-800 text-white grid place-items-center">
        <h1 className="text-3xl font-extrabold">Admissions</h1>
      </div>
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold">Process</h2>
        <p className="mt-3 text-gray-700">Admission to EMRS Dornala for boarding is through the EMRS Entrance Exam. Selected students receive free education, boarding, uniforms, books, and other essentials.</p>
        <ol className="mt-6 list-decimal list-inside space-y-2 text-gray-700">
          <li>Register for EMRS Entrance Exam when announced.</li>
          <li>Appear for the exam at the designated center.</li>
          <li>On selection, complete document verification.</li>
          <li>Join the residential campus and orientation.</li>
        </ol>
        <div className="mt-8 rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1200&auto=format&fit=crop" className="h-56 w-full object-cover" alt="Admissions" />
        </div>
      </section>
    </div>
  )
}

export default AdmissionsPage

