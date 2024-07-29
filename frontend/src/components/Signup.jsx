import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdLocationPin } from 'react-icons/md'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import signupImg from '../assets/signup.svg'

const Signup = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [contact, setContact] = useState('')
  const [location, setLocation] = useState('')
  const [role, setRole] = useState('')
  const navigate = useNavigate()

  // signup
  const signupHandler = async (e) => {
    e.preventDefault()
    await axios
      .post('https://pgsolutions-backend.onrender.com/api/v1/user/signup', {
        fullname,
        email,
        password,
        contact,
        location,
        role,
      })
      .then((response) => {
        console.log(response)
        toast.success(response.data.msg)
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.response.data.msg)
      })
  }

  return (
    <>
      <div className="h-screen w-full md:grid md:grid-cols-2 md:gap-0 md:p-0 flex flex-col items-center justify-center gap-3 p-3 rounded-lg">
        <div className="md:h-screen md:w-full h-screen w-full flex items-center justify-center">
          <img src={signupImg} className="h-[90%]" />
        </div>

        {/* Signup */}
        <div className="md:h-full md:w-full h-screen w-full flex items-center justify-center flex-col">
          <div className="flex flex-col gap-3  p-5 rounded-lg shadow-2xl w-1/2">
            <h1 className="text-xl font-bold text-slate-800 mb-3">Signup</h1>

            <form className="flex flex-col gap-2" onSubmit={signupHandler}>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </label>

              <label className="input input-bordered  flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="input input-bordered  flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <BsTelephoneFill className="text-xs text-zinc-500" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <MdLocationPin className=" text-zinc-500" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>

              <h2 className="w-full text-center mt-3 font-semibold">
                Select your role
              </h2>
              <div className="flex justify-between p-3">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="radio-6"
                    className="radio radio-error"
                    id="Seeker"
                    checked={role === 'Seeker'}
                    value="Seeker"
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="Seeker">Seeker</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="radio-6"
                    className="radio radio-error"
                    id="Poster"
                    checked={role === 'Poster'}
                    value="Poster"
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="Poster">Poster</label>
                </div>
              </div>

              <button className="btn btn-error btn-sm mt-6">Signup</button>
              <p className="mt-5 text-sm w-full text-center ">
                Already have an account?{' '}
                <Link className="text-error font-bold" to={'/login'}>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
