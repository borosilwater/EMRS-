import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

const PublicLayout = lazy(() => import('./layouts/PublicLayout'))
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'))

const HomePage = lazy(() => import('./pages/HomePage'))
const MeetUsPage = lazy(() => import('./pages/MeetUs/MeetUsPage'))
const CampusLifePage = lazy(() => import('./pages/CampusLife/CampusLifePage'))
const NewsEventsPage = lazy(() => import('./pages/NewsEventsPage'))
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'))
const AchievementsPage = lazy(() => import('./pages/AchievementsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const LoginPage = lazy(() => import('./pages/Auth/LoginPage'))
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage'))
const ForgotPasswordPage = lazy(() => import('./pages/Auth/ForgotPasswordPage'))
const ResetPasswordPage = lazy(() => import('./pages/Auth/ResetPasswordPage'))

const TeacherDashboard = lazy(() => import('./pages/Dashboard/TeacherDashboard'))
const StudentDashboard = lazy(() => import('./pages/Dashboard/StudentDashboard'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen grid place-items-center text-primary-700">Loading…</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/meet-us/*" element={<MeetUsPage />} />
            <Route path="/campus-life" element={<CampusLifePage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Route>

          <Route element={<ProtectedRoute allow={["teacher"]} />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute allow={["student"]} />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard/student" element={<StudentDashboard />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
