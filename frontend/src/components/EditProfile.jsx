import React, { useEffect, useState } from 'react'
import { RiEdit2Fill } from 'react-icons/ri'
import axios from 'axios'
import { GrFormClose } from 'react-icons/gr'

const EditProfile = ({ data, onProfileUpdate }) => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState('')
  const [file, setFile] = useState(null)
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    if (data) {
      setFullname(data.fullname || '')
      setEmail(data.email || '')
      setContact(data.contact || '')
      setLocation(data.location || '')
      setAddress(data.address || '')
    }
  }, [data])

  const editProfile = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('fullname', fullname)
    formData.append('email', email)
    formData.append('contact', contact)
    formData.append('location', location)
    formData.append('address', address)
    if (file) {
      formData.append('file', file)
    }
    console.log(data)
    try {
      const res = await axios.put(
        `https://pgsolutions-backend.onrender.com/api/v1/user/editProfile/${data._id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      console.log(res)
      onProfileUpdate(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const closeEdit = () => {
    setEdit(!edit)
  }

  return (
    <>
      {edit === false && (
        <form
          onSubmit={editProfile}
          className="h-full w-1/2  flex gap-2 flex-col items-center justify-center py-2 shadow-lg shadow-neutral-800 bg-neutral-900 rounded-md"
        >
          <div className="w-full flex p-1 px-3 justify-end">
            <GrFormClose
              className="text-white text-xl cursor-pointer hover:bg-red-800"
              onClick={closeEdit}
            />
          </div>
          <h1 className="text-3xl flex items-center gap-3 font-semibold text-neutral-500 mt-0">
            <RiEdit2Fill />
            Edit your profile
          </h1>
          <div className="h-full w-full flex flex-col gap-3 items-center justify-start py-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs rounded-full bg-transparent border-2 border-neutral-700 text-white focus:outline-white "
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs rounded-full bg-transparent border-2 border-neutral-700 text-white focus:outline-white "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs rounded-full bg-transparent border-2 border-neutral-700 text-white focus:outline-white "
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs rounded-full bg-transparent border-2 border-neutral-700 text-white focus:outline-white "
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs rounded-full bg-transparent border-2 border-neutral-700 text-white focus:outline-white "
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="file" className="text-neutral-500">
              Choose a profile Picture
            </label>
            <input
              type="file"
              id="file"
              className="file-input file-input-bordered file-input-xs w-full max-w-xs rounded-full border-none file-input-warning"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className="btn btn-warning mt-3 w-1/4 btn-sm">Edit</button>
          </div>
        </form>
      )}
    </>
  )
}

export default EditProfile
