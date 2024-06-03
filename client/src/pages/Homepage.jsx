import React from 'react'
import { FcHome } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import '../index.css'

const Homepage = () => {
  return (
    <>
      <div className="h-[92vh] w-full lg:grid lg:grid-cols-2 grid-cols-3 ">
        <div className="flex items-center flex-col justify-center bg-zinc-900">
          <h1 className="md:text-8xl md:ml-3 text-3xl w-full ml-5 font-bold text-zinc-600">
            Searching for a <span className="text-teal-600">PG?</span>
          </h1>

          <p className="text-zinc-400 flex items-center gap-4 font-semibold md:text-4xl w-full ml-6 md:mt-4 ">
            Here we are.
            <FcHome />
          </p>

          <p className="w-full ml-6 md:text-xl text-sm mt-1 text-zinc-100">
            Providing the best rooms all over India at affordable prices.
          </p>

          <div className="w-full ml-6">
            <button className="border-2 md:p-1 mt-9 md:px-3 px-2 py-1 border-teal-600 text-teal-700 hover:text-cyan-400 hover:border-cyan-400 duration-200 animate-pulse">
              <Link>Checkout rooms</Link>
            </button>
          </div>
        </div>

        {/* image section */}
        <div className="bg-green-400 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" className='h-screen w-full object-cover brightness-50'
          />
        </div>
      </div>
    </>
  )
}

export default Homepage
