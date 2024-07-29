import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { IoPersonCircle } from 'react-icons/io5'
import { SiHomebridge } from 'react-icons/si'
const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const authUser = useSelector((state) => state.auth.authUser)
  const navigate = useNavigate()

  const logoutHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        'https://pgsolutions-backend.onrender.com/api/v1/user/logout',
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

      <div className="navbar h-[1vh]  bg-base-500  border-none">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={'/homepage'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={'/rooms'}>Availabilty</NavLink>
              </li>
              <li>
                <NavLink className="btn btn-outline btn-error mt-3 btn-sm">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="btn btn-ghost text-xl" to={'/homepage'}>
            <SiHomebridge className="text-4xl" />
            PGSolutions
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={'/homepage'} className="text-sm font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/about'} className="text-sm font-semibold">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contact'} className="text-sm font-semibold">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to={'/rooms'} className="text-sm font-semibold">
                Check Rooms
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {isLoggedIn === true ? (
            <button
              className="md:btn md:btn-error md:btn-sm hidden shadow-md "
              onClick={logoutHandler}
            >
              Logout
            </button>
          ) : (
            <Link
              to={'/login'}
              className="btn btn-outline border-none btn-default btn-sm shadow-md shadow-neutral-700"
            >
              Login
            </Link>
          )}
        </div>
        <div className=" mx-3 rounded-full w-11 h-10">
          {authUser?.profilePic ? (
            <div className="border-2 border-neutral-400 shadow-md shadow-neutral-600 h-10 w-10 overflow-hidden rounded-full object-contain">
              <img
                src={`http://localhost:8000/${authUser?.profilePic}`}
                onClick={goToProfile}
                alt="Profile"
                className="object-contain"
              />
            </div>
          ) : (
            <IoPersonCircle
              className="text-4xl mx-2 text-neutral-800"
              onClick={goToProfile}
            />
          )}
        </div>
        <div className=""></div>
      </div>
    </>
  )
}

export default Navbar
