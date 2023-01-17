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
          <Route path="/" element={<Navigate to="/product-feedback" />} />
          <Route path="/product-feedback" element={user ? <Home /> : <Navigate to="/product-feedback/login" />} />
          <Route path="/product-feedback/login" element={!user ? <Login /> : <Navigate to="/product-feedback" />} />
          <Route path="/product-feedback/signup" element={!user ? <Signup /> : <Navigate to="/product-feedback" />} />
          <Route path="/product-feedback/feedback/:id" element={<FeedbackDetail />} />
          <Route path="/product-feedback/feedback/new" element={<NewFeedback />} />
          <Route path="/product-feedback/feedback/:id/edit" element={<EditFeedback />} />
          <Route path="/product-feedback/roadmap" element={<Roadmap />} />
          <Route path="/product-feedback/*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  )
}

