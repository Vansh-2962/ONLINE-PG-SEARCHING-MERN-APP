import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import '../index.css'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // login handler
  const loginHandler = (e) => {
    e.preventDefault()
    axios
      .post(
        'http://localhost:8000/api/v1/user/login',
        { email, password },
        { withCredentials: true },
      )
      .then((response) => {
        toast.success(`Welcome ${response.data.fullname}`)
        if (response.data.role === 'Poster') {
          navigate('/poster')
        } else {
          navigate('/seeker')
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.response.data.msg)
      })

    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className="lg:h-screen lg:w-full h-[100vh] w-[100vw] bg-zinc-900 flex justify-center items-center">
        <form className="lg:w-1/4" onSubmit={loginHandler}>
          <div className="lg:h-[90%] bg-gradient-to-b opacity-90 flex flex-col gap-3 from-zinc-900 to-cyan-500 p-7 rounded-md">
            {/* Register heading */}
            <h2 className="lg:text-4xl text-2xl text-blue-500 font-semibold">
              L<span className="text-cyan-400">ogin</span>
            </h2>

            {/* email */}
            <label
              htmlFor="email"
              className="text-white font-bold lg:text-xl focus:scale-110 duration-500 outline-none"
            >
              Email
            </label>
            <input
              type="email"
              className="rounded-md lg:p-2 lg:px-3 px-2 focus:scale-110 duration-700 outline-none"
              name="email"
              id="email"
              placeholder="vansh@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* password */}
            <label
              htmlFor="password"
              className="text-white font-bold lg:text-xl"
            >
              Password
            </label>
            <input
              type="password"
              className="rounded-md lg:p-2 lg:px-3 px-2 focus:scale-110 duration-500 outline-none"
              name="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* button */}
            <p>
              Don't have an account?
              <span className="text-xl text-cyan-300">
                {' '}
                <Link to="/">Register</Link>
              </span>
            </p>
            <button
              type="submit"
              className="w-full p-2  mt-3 bg-cyan-400 rounded-md text-slate-700 font-semibold text-xl hover:bg-blue-400  duration-500 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
