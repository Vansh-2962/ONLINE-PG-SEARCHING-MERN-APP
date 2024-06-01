import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Seeker from './pages/Seeker'
import Poster from './pages/Poster'
import Profile from './pages/Profile'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/seeker" element={<Seeker />}>
            <Route path="/seeker/home" element={<Homepage />} />
            <Route path="/seeker/profile" element={<Profile />} />
          </Route>
          <Route path="/poster" element={<Poster />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
