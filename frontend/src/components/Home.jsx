import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { IoPersonCircle } from 'react-icons/io5'
import { SiHomebridge } from 'react-icons/si'
import Navbar from './Navbar'
import Homepage from './Homepage'

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const navigate = useNavigate()

  const logoutHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        'http://localhost:8000/api/v1/user/logout',
      )
      toast.success(response.data.msg)
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  const goToProfile = () => {
    navigate('/profile')
  }

  return (
    <>
      {/* navbar */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Home
