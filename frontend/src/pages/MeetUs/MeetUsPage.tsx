import { Routes, Route, NavLink } from 'react-router-dom'

function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-primary-700">About Us</h2>
      <p className="mt-4 text-gray-700">EMRS Dornala is a residential school under NESTS, providing free quality education, boarding, and facilities to tribal students, affiliated to CBSE.</p>
    </section>
  )
}

function ChairmanMessage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
      <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop" alt="Chairman" className="rounded-xl w-full h-72 object-cover" />
      <div>
        <h3 className="text-xl font-semibold">Chairman’s Perspective</h3>
        <p className="mt-3 text-gray-700">Our mission is to empower students with values, knowledge, and confidence to excel in life. We ensure all opportunities and resources are accessible to each student.</p>
      </div>
    </section>
  )
}

function PrincipalMessage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
      <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop" alt="Principal" className="rounded-xl w-full h-72 object-cover order-2 md:order-1" />
      <div className="order-1 md:order-2">
        <h3 className="text-xl font-semibold">Academic Perspective</h3>
        <p className="mt-3 text-gray-700">We focus on strong academic foundations, inquiry-based learning, and co-curricular excellence to nurture well-rounded personalities.</p>
      </div>
    </section>
  )
}

function Affiliations() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-xl font-semibold">NESTS and CBSE Affiliation</h3>
      <p className="mt-3 text-gray-700">EMRS Dornala operates under the National Education Society for Tribal Students (NESTS) with CBSE affiliation, ensuring national standards in curriculum and assessment.</p>
      <div className="mt-6 flex gap-6 items-center">
        <img src="https://upload.wikimedia.org/wikipedia/en/7/7b/National_Education_Society_for_Tribal_Students_Logo.png" className="h-16" />
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Central_Board_of_Secondary_Education_logo.svg/1200px-Central_Board_of_Secondary_Education_logo.svg.png" className="h-16" />
      </div>
    </section>
  )
}

function MeetUsPage() {
  return (
    <div>
      <div className="h-48 bg-gradient-to-r from-primary-600 to-primary-800 text-white grid place-items-center">
        <h1 className="text-3xl font-extrabold">Meet Us</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-3 overflow-x-auto pb-2">
          <NavLink to="/meet-us" end className={({isActive}) => `px-4 py-2 rounded-full border ${isActive ? 'bg-primary-600 text-white border-primary-600' : 'border-gray-200 hover:bg-gray-50'}`}>About</NavLink>
          <NavLink to="/meet-us/management" className={({isActive}) => `px-4 py-2 rounded-full border ${isActive ? 'bg-primary-600 text-white border-primary-600' : 'border-gray-200 hover:bg-gray-50'}`}>Management Perspective</NavLink>
          <NavLink to="/meet-us/academics" className={({isActive}) => `px-4 py-2 rounded-full border ${isActive ? 'bg-primary-600 text-white border-primary-600' : 'border-gray-200 hover:bg-gray-50'}`}>Academic Perspective</NavLink>
          <NavLink to="/meet-us/affiliations" className={({isActive}) => `px-4 py-2 rounded-full border ${isActive ? 'bg-primary-600 text-white border-primary-600' : 'border-gray-200 hover:bg-gray-50'}`}>NESTS & CBSE</NavLink>
        </div>
      </div>

      <Routes>
        <Route index element={<About />} />
        <Route path="management" element={<ChairmanMessage />} />
        <Route path="academics" element={<PrincipalMessage />} />
        <Route path="affiliations" element={<Affiliations />} />
      </Routes>
    </div>
  )
}

export default MeetUsPage

