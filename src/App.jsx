import { Routes, Route, Navigate } from 'react-router-dom'

import { useAuthContext } from './hooks/useAuthContext'

import Home from './pages/Home'
import FeedbackDetail from './pages/FeedbackDetail'
import NewFeedback from './pages/NewFeedback'
import EditFeedback from './pages/EditFeedback'
import Roadmap from './pages/Roadmap'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'
import Login from './pages/Login'

export default function App() {

  const { user, authComplete } = useAuthContext()

  return (
    <div>
      {authComplete && (
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route path="/feedback/:id" element={<FeedbackDetail />} />
          <Route path="/feedback/new" element={<NewFeedback />} />
          <Route path="/feedback/:id/edit" element={<EditFeedback />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  )
}

