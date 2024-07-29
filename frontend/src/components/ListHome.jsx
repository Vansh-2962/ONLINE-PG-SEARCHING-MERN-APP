import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const ListHome = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [size, setSize] = useState('')
  const [address, setAddress] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [file, setFile] = useState(null)
  const navigate = useNavigate()
  const authUser = useSelector((state) => state.auth.authUser)

  const createPGHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('size', size)
      formData.append('description', description)
      formData.append('location', location)
      formData.append('address', address)
      formData.append('price', price)
      formData.append('file', file)
      const res = await axios.post(
        `https://pgsolutions-backend.onrender.com/api/v1/room/createPG/${authUser._id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      if (res.status === 200) {
        toast.success('Your PG has been listed successfully')
        navigate('/rooms')
      }
      setTitle('')
      setAddress('')
      setLocation('')
      setDescription('')
      setPrice('')
      setSize('')
      setFile('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center h-full">
          <img
            src="https://imgs.search.brave.com/Ar-GAE7JUYoDKR_sVZDECqXIsy_3tSmtE0NPwVzNWqk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS81MzkwMDkw/LzUxNTEwL3YvNDUw/L2RlcG9zaXRwaG90/b3NfNTE1MTAyNjA0/LXN0b2NrLWlsbHVz/dHJhdGlvbi1yZWdp/c3RyYXRpb24tZm9y/bS1jdXRlLWNhcnRv/b24tbWFuLmpwZw"
            alt=""
            width={'400px'}
            className="rounded-lg shadow-lg shadow-neutral-500"
          />
        </div>
        <form
          className="h-[97vh] w-1/2 flex flex-col gap-3 justify-center shadow-lg shadow-neutral-500 rounded-md px-5"
          onSubmit={createPGHandler}
        >
          <h1 className="text-xl font-bold ">Fill up the details</h1>

          <div className="flex gap-2 items-center justify-between">
            <div className="badge badge-neutral p-3">Title</div>
            <input
              type="text"
              placeholder="Urban Nest PG"
              className="input input-bordered input-sm w-full max-w-xs bg-neutral-100 focus:outline-black "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex gap-3 items-center justify-between">
            <div className="badge badge-neutral p-3">Description</div>
            <input
              type="text"
              placeholder="Description"
              className="input input-bordered input-sm w-full max-w-xs bg-neutral-100 focus:outline-black "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex gap-3 items-center justify-between">
            <div className="badge badge-neutral p-3">Location</div>
            <input
              type="text"
              placeholder="Ranchi, Jharkhand"
              className="input input-bordered input-sm w-full max-w-xs bg-neutral-100 focus:outline-black"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="flex gap-3 items-center justify-between">
            <div className="badge badge-neutral p-3">Address</div>
            <input
              type="text"
              placeholder="Ganga apt., Block F, Vikas Nagar"
              className="input input-bordered input-sm w-full max-w-xs bg-neutral-100 focus:outline-black"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="flex gap-3 items-center justify-between">
            <div className="badge badge-neutral p-3">Room type</div>
            <input
              type="text"
              placeholder="Single room/ Double room/ Shared "
              className="input input-bordered input-sm w-full max-w-xs bg-neutral-100 focus:outline-black"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>

          <div className="flex gap-3 items-center justify-between">
            <div className="badge badge-neutral p-3">Price/month</div>
            <input
              type="number"
              placeholder="5000"
              className="input input-bordered input-sm w-full max-w-xs bg-neutral-100 focus:outline-black"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col gap-2 mt-5">
            <span className="font-semibold">
              Add some pictures of your home
            </span>
            <input
              type="file"
              className="file-input file-input-xs file-input-bordered file-input-success  w-full max-w-xs"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="w-full text-center mt-4">
            <button className="btn btn-success" type="submit">
              List my Home
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ListHome
