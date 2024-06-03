import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
import '../index.css'
import { HiMiniHomeModern } from 'react-icons/hi2'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { BiHomeAlt2 } from 'react-icons/bi'
import { MdPerson4 } from 'react-icons/md'

const Seeker = () => {
  return (
    <>
      <nav className="w-full bg-zinc-900 flex h-[8vh] items-center justify-around">
        <h1 className="flex items-center text-zinc-300 gap-1 text-xl ">
          <HiMiniHomeModern />
          my<span className="text-teal-400">Home</span>
        </h1>
        <ul className="md:flex hidden gap-9 items-center text-zinc-300 ">
          <li>
            <NavLink to={'/seeker/home'} className="flex items-center gap-1">
              Home
              <BiHomeAlt2 />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/seeker/profile'} className="flex items-center gap-1">
              Profile
              <MdPerson4 />
            </NavLink>
          </li>
          <button className="border-2 px-3 py-1 border-teal-600 text-teal-600 flex items-center gap-2 hover:text-cyan-400 hover:border-cyan-400">
            Logout <RiLogoutCircleLine />
          </button>
        </ul>
        <span className="md:hidden block text-white text-xl">&#8801;</span>
      </nav>
      <Outlet />
    </>
  )
}

export default Seeker
