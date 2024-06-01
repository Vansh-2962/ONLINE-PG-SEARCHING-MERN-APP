import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
import '../index.css'
const Seeker = () => {
  return (
    <>
      <nav className="w-full bg-yellow-400 flex h-[8vh] items-center justify-around">
        <h1>Logo</h1>
        <ul className="flex gap-3 items-center">
          <li>
            <NavLink to={'/seeker/home'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/seeker/profile'}>Profile</NavLink>
          </li>
          <button className="border-2 px-3 rounded-md border-black bg-yellow-300">
            Logout
          </button>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Seeker
