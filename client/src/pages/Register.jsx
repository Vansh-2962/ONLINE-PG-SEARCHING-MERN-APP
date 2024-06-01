import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()

  const [role, setRole] = useState('')
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    try {
      if (password !== confirmPassword) {
        toast.error('Passwords do not match')
      }
      axios
        .post(
          'http://localhost:8000/api/v1/user/register',
          {
            role,
            fullname,
            email,
            confirmPassword,
            password,
          },
          { withCredentials: true },
        )
        .then((response) => {
          console.log(response.data)
          navigate('/login')
        })
        .catch((err) => toast.error(err.response.data.msg))

      setFullname('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setRole('')
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
    }
  }

  return (
    <>
      <div className="lg:h-screen lg:w-full h-[100vh] w-[100vw] bg-zinc-900 flex justify-center items-center">
        <form onSubmit={handleRegister} className="lg:w-1/4">
          <div className="lg:h-[90%] bg-gradient-to-b opacity-90 flex flex-col gap-2 from-zinc-900 to-yellow-500 p-7 rounded-md">
            {/* Register heading */}
            <h2 className="lg:text-4xl text-2xl text-rose-500 font-semibold">
              R<span className="text-orange-400">egister</span>
            </h2>

            {/* fullname */}
            <label
              htmlFor="fullname"
              className="text-zinc-100 font-bold lg:text-xl "
            >
              Fullname
            </label>
            <input
              type="text"
              className="rounded-md lg:p-2 lg:px-3 px-2 focus:scale-110 duration-500 outline-none"
              name="fullname"
              id="fullname"
              placeholder="Vansh Singh Sura"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />

            {/* email */}
            <label
              htmlFor="email"
              className="text-zinc-100 font-bold lg:text-xl focus:scale-110 duration-500 outline-none"
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
              className="text-zinc-100 font-bold lg:text-xl"
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

            {/* confirm password */}
            <label
              htmlFor="confirmPassword"
              className="text-zinc-100 font-bold lg:text-xl"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="rounded-md lg:p-2 lg:px-3 px-2 focus:scale-110 duration-500 outline-none"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* radio buttons */}
            <label className="text-zinc-100  lg:text-xl">Role</label>
            <div className="w-full gap-10 -mt-3 flex justify-center ">
              <div className="lg:p-3 lg:w-1/2 flex items-center ">
                <input
                  type="radio"
                  name="role"
                  id="Seeker"
                  value="Seeker"
                  className="form-radio lg:h-6 lg:w-6 text-blue-600 transition duration-150 ease-in-out"
                  onChange={(e) => setRole(e.target.value)}
                  checked={role === 'Seeker'}
                />
                <label htmlFor="Seeker" className="text-xl ml-2 text-zinc-800">
                  Seeker
                </label>
              </div>

              <div className="lg:p-3 w-1/2 flex items-center">
                <input
                  type="radio"
                  name="role"
                  id="Poster"
                  value="Poster"
                  className="form-radio lg:h-6 lg:w-6 text-blue-600 transition duration-150 ease-in-out"
                  onChange={(e) => setRole(e.target.value)}
                  checked={role === 'Poster'}
                />
                <label htmlFor="Poster" className="text-xl ml-2  text-zinc-800">
                  Poster
                </label>
              </div>
            </div>
            <p className="lg:text-md ">
              Already have an Account?
              <span className="font-semibold text-red-500 lg:text-xl ">
                <Link to="/login"> Login</Link>
              </span>{' '}
            </p>

            <button
              type="submit"
              className="w-full p-2 bg-orange-400 rounded-md text-slate-700 font-semibold text-xl hover:bg-yellow-400  duration-500 "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
