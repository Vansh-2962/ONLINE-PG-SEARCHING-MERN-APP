import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import Contact from './components/Contact'
import Homepage from './components/Homepage'
import Rooms from './components/Rooms'
import Profile from './components/Profile'
import ListHome from './components/ListHome'
import AboutUsMore from './components/AboutUsMore'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/aboutTheCompany" element={<AboutUsMore />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listHome" element={<ListHome />} />
      </Routes>
    </>
  )
}

export default App
