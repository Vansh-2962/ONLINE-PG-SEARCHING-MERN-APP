import React, { useEffect, useState } from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { FaMobileAlt } from 'react-icons/fa'
import { BiVoicemail } from 'react-icons/bi'
import { TbLocationHeart } from 'react-icons/tb'
import { RiEdit2Fill } from 'react-icons/ri'
import profileImg from '../assets/profile.png'
import Card from './Card'
import { HiHomeModern } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import EditProfile from './EditProfile'
import { BiSolidHomeHeart } from 'react-icons/bi'

const Profile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const [edit, setEdit] = useState(false)
  const [userRoom, setUserRoom] = useState()
  const authUser = useSelector((state) => state.auth.authUser)

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `https://pgsolutions-backend.onrender.com/api/v1/user/getUser/${authUser?._id}`,
        )
        if (res.data) {
          setUser(res.data)
        } else {
          toast.success('You must login to view your profile')
          navigate('/login')
        }
      } catch (error) {
        console.error(error)
        navigate('/login')
      }
    }

    if (authUser?._id) {
      getUser()
    } else {
      navigate('/login')
    }
  }, [authUser, navigate])

  const editProfile = () => {
    setEdit(!edit)
  }

  const goBack = (e) => {
    e.preventDefault()
    navigate('/homepage')
  }

  const handleProfileUpdate = (updatedUser) => {
    setUser(updatedUser)
  }

  useEffect(() => {
    const getUserRoom = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/room/getUserRoom/${user?._id}`,
        )
        if (res) {
          // console.log(res)
          setUserRoom(res.data)
        }
      } catch (err) {
        console.log(err.response.data)
        console.log(userRoom)
      }
    }
    getUserRoom()
  }, [])

  return (
    <>
      {user ? (
        <div
          className={`h-screen w-full flex items-center justify-start bg-gradient-to-r from-neutral-100 to-neutral-400`}
        >
          {/* sidebar */}
          <div className="h-screen md:w-1/5 w-full  bg-neutral-900 rounded-tr-2xl rounded-br-2xl flex flex-col items-center justify-between px-5 shadow-neutral-900 shadow-4xl ">
            <div className="flex flex-col items-center justify-center gap-2">
              <span
                className="rounded-full  text-left p-3 hover:bg-neutral-700 "
                onClick={goBack}
              >
                <RiArrowGoBackFill className="text-neutral-500" />
              </span>
              {user ? (
                <img
                  src={`http://localhost:8000/${user.profilePic}`}
                  alt="profile"
                  className="h-40 w-40 object-contain rounded-full p-2 border-2 border-white shadow-lg shadow-black hover:scale-105 transition-all duration-400 "
                />
              ) : (
                { profileImg }
              )}
              <h1 className="text-neutral-600 font-sans font-bold text-2xl my-3 shadow-lg shadow-black rounded-full px-1">
                {user?.fullname}
              </h1>
              <span className="text-neutral-500 flex items-center gap-2">
                <BiVoicemail />

                {user?.email}
              </span>
              <span className="text-neutral-500 flex items-center gap-2">
                <FaMobileAlt />
                {user?.contact}
              </span>
              <span className="text-neutral-500 flex items-center gap-2 justify-center ">
                <TbLocationHeart />
                {user?.location}
              </span>
              <span className="text-neutral-500 text-center mt-4 flex items-center gap-2 justify-center flex-col">
                <BiSolidHomeHeart className="text-neutral-500" />
                {user?.address}
              </span>
            </div>
            <button
              className="btn btn-accent mb-4 btn-sm w-3/4"
              onClick={editProfile}
            >
              <RiEdit2Fill />
              Edit Profile
            </button>
          </div>

          <div className="h-[100%] md:w-5/6 overflow-auto p-5 flex ">
            <div className=" p-2 w-1/2">
              <h1 className="text-4xl font-bold flex items-center gap-2">
                <HiHomeModern /> My Home
              </h1>
              <div className="flex items-start h-screen w-5/6  justify-start p-8  gap-5 overflow-auto">
                {userRoom === undefined ? (
                  <div className="w-full flex flex-col items-start gap-5 text-sm font-sans">
                    <span className="font-semibold">Hey there! 🌟</span>
                    <p>
                      It looks like you haven't purchased any personal guest
                      house (PG) yet. No worries – finding the perfect place
                      takes time! 🏡✨
                    </p>
                    <p>
                      Whether you're still exploring options or just starting
                      your search, we're here to help you every step of the way.
                      Feel free to browse through our latest listings or reach
                      out to our team for personalized recommendations.
                    </p>
                    <span>
                      Happy hunting, and may you soon find your dream PG! 😊
                    </span>
                    <p>
                      Warm regards,
                      <br />
                      <span className="font-semibold">PGSolution Team</span>
                    </p>
                  </div>
                ) : (
                  'Room found'
                )}
              </div>
            </div>
            {edit === true ? (
              <EditProfile data={user} onProfileUpdate={handleProfileUpdate} />
            ) : null}
          </div>
        </div>
      ) : (
        navigate('/login')
      )}
    </>
  )
}

export default Profile
