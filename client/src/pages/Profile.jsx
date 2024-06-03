import React, { useContext, useEffect, useState } from 'react'
import { IoPersonCircle } from 'react-icons/io5'
import { UserContext } from '../Context/UserContext'
import { RiEditFill } from 'react-icons/ri'
import { MdPhotoAlbum } from 'react-icons/md'
import { GoPerson } from 'react-icons/go'
import { TiPhone } from 'react-icons/ti'
import { GoLocation } from 'react-icons/go'

const Profile = () => {
  const { user } = useContext(UserContext)
  const [edit, setEdit] = useState(false)

  const toggleEdit = () => {
    setEdit(!edit)
  }

  return (
    <>
      <div className="h-[92vh] md:w-full  bg-zinc-900 md:flex items-center justify-center">
        <div className="bg-zinc-800 rounded-md p-5 px-9 flex flex-col items-center gap-5">
          <div className="h-32 w-32 bg-black rounded-full text-zinc-700 flex items-center justify-center">
            <IoPersonCircle className="w-full h-full " />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-center text-teal-500">
              {user?.fullname || 'Full Name'}
            </h1>
            <span className="text-center text-zinc-400">
              {user?.email || 'Email'}
            </span>

            <p className="text-center text-zinc-400 mt-3">
              Role: <span className="text-teal-500">{user?.role}</span>
            </p>
            <p className="text-center text-zinc-400">
              Contact: <span className="text-teal-500">{user?.phone}</span>
            </p>
            <p className="text-center text-zinc-400">
              Location: <span className="text-teal-500">{user?.location}</span>
            </p>
          </div>
          <button
            className="text-white flex items-center gap-2 bg-teal-600 w-full justify-center py-2 rounded-md hover:bg-teal-700"
            onClick={toggleEdit}
          >
            <RiEditFill /> Edit Profile
          </button>
        </div>

        {/* Edit Profile */}

        {edit === true ? (
          <div
            className={`bg-zinc-950 p-5 flex flex-col items-center rounded-md ${
              edit ? 'slide-in' : 'slide-out'
            }`}
          >
            <h1 className="text-teal-500 font-bold text-xl px-9">
              Edit profile
            </h1>

            <form className="flex flex-col items-center">
              <div className="flex flex-col mt-5 ">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="opacity-0 w-[0.1px] h-[0.1px] overflow-hidden absolute -z-[-1]"
                />
                <label
                  htmlFor="file"
                  className="text-teal-500 text-xl bg-zinc-600 rounded-full p-2"
                >
                  <MdPhotoAlbum />
                </label>
              </div>

              <div className="flex flex-col mt-5 gap-1">
                <label
                  htmlFor="fullname"
                  className="text-teal-600  flex items-center justify-between"
                >
                  Fullname <GoPerson />
                </label>
                <input
                  type="text"
                  id="fullname"
                  value={user?.fullname}
                  className="outline-teal-600 bg-zinc-700 text-teal-500 px-2 rounded-sm"
                />
              </div>

              <div className="flex flex-col mt-5 gap-1">
                <label
                  htmlFor="contact"
                  className="text-teal-600  flex items-center justify-between"
                >
                  Contact <TiPhone />
                </label>
                <input
                  type="text"
                  id="contact"
                  value={user?.phone}
                  className="outline-teal-600 bg-zinc-700 text-teal-500 px-2 rounded-sm"
                />
              </div>

              <div className="flex flex-col mt-5 gap-1">
                <label
                  htmlFor="location"
                  className="text-teal-600 flex items-center justify-between"
                >
                  Location <GoLocation />
                </label>
                <input
                  type="text"
                  id="location"
                  value={user?.location}
                  className="outline-teal-600 bg-zinc-700 text-teal-500 px-2 rounded-sm"
                />
              </div>

              <button className="text-white bg-teal-600 w-full justify-center py-1 rounded-md hover:bg-teal-700 mt-3">
                Update
              </button>
            </form>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Profile
