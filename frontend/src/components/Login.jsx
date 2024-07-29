import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, setAuthUser } from '../redux/auth'
import loginImg from '../assets/login.svg'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://pgsolutions-backend.onrender.com/api/v1/user/login',
        { email, password },
        { withCredentials: true },
      )
      toast.success('Logged In Successfully')
      // console.log(response.data)
      dispatch(login())
      dispatch(setAuthUser(response.data))
      navigate('/homepage')
    } catch (err) {
      console.error(err)
      toast.error(err.response?.data?.msg || 'Login failed')
    }
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className="h-screen w-full md:grid md:grid-cols-2 md:gap-0 md:p-0 flex flex-col items-center justify-center gap-3 p-3 rounded-lg">
        <div className="md:h-screen md:w-full h-screen w-full flex items-center justify-center">
          <img src={loginImg} className="h-[90%]" />
        </div>

        <div className="md:h-full md:w-full h-screen w-full flex items-center justify-center flex-col">
          <div className="flex flex-col gap-3 p-5 rounded-lg shadow-2xl">
            <h1 className="text-xl font-bold text-slate-800 mb-3">Login</h1>
            <form className="flex flex-col gap-2" onSubmit={loginHandler}>
              <label className="input input-bordered flex items-center gap-2">
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
              <label className="input input-bordered flex items-center gap-2">
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
              <button className="btn btn-warning btn-sm mt-6">Login</button>
              <p className="mt-5 text-sm w-full text-center">
                Do not have an account?{' '}
                <Link className="text-yellow-500 font-bold" to={'/signup'}>
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
