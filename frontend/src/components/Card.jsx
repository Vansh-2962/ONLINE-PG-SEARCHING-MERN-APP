import React, { useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import axios from 'axios'
import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const Card = ({ data }) => {
  const [showAdd, setShowAdd] = useState(false)
  const [showDesc, setShowDesc] = useState(false)
  const [owner, setOwner] = useState()
  const [showOwner, setShowOwner] = useState(false)
  const authUser = useSelector((state) => state.auth.authUser)

  const showAddress = () => {
    setShowAdd(!showAdd)
  }
  const showDescription = () => {
    setShowDesc(!showDesc)
  }

  const getOwnerDetails = async (id) => {
    // window.onClick(setShowOwner(false))
    setShowOwner(true)
    try {
      const res = await axios.get(
        `https://pgsolutions-backend.onrender.com/api/v1/room/getOwnerDetails/${id}`,
      )
      console.log('API response:', res.data)
      if (res && res.data) {
        setOwner(res.data)
      }
    } catch (error) {
      console.error('Error fetching owner details:', error)
    }
  }

  const purchaseRoom = async (id) => {
    // console.log(id)
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/room/purchase/${authUser._id}/${data._id}`,
      )
      console.log(res)
      toast.success(res.data.msg)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="card w-78 glass shadow-lg shadow-neutral-500 border-none ">
        <figure>
          <img
            className="h-50 w-full"
            src={`http://localhost:8000/${data?.image}`}
            alt="Room"
          />
        </figure>
        <div
          className={`card-body flex flex-col items-start  ${
            showDesc === true ? 'justify-start' : 'justify-between'
          } `}
        >
          <div className="flex flex-col gap-2">
            <h2 className="card-title">{data?.title}</h2>
            <span className="flex items-center gap-1 ">
              <HiLocationMarker />
              {data?.location}
            </span>
            <small className="" onClick={showDescription}>
              <div className="text-cyan-800 hover:underline hover:cursor-pointer text-base">
                Read more..
              </div>
              <p className="font-semibold text-green-800">
                {showDesc ? data?.description : ''}
              </p>
            </small>
            <div className="card-actions flex items-center justify-between w-full text-center">
              <small className="font-bold text-blue-500 text-xl ">
                &#8377;{data?.price}/month
              </small>
            </div>
            <div>
              <button
                className="btn btn-primary btn-sm mt-2"
                onClick={showAddress}
              >
                Address
              </button>
            </div>
            <small className="font-semibold text-green-800">
              {showAdd ? data?.address : ''}
            </small>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <small className="mt-5">
              Listed on:{' '}
              <span className="font-bold">{data?.createdAt.slice(0, 10)}</span>
            </small>
            <small>
              Room size:{' '}
              <span className="font-bold">
                {data?.size.includes('room')
                  ? data?.size
                  : data?.size.concat(' room')}
              </span>
            </small>
            <small className="text-cyan-800 hover:underline hover:cursor-pointer">
              {data?.owner && (
                <button className="" onClick={() => getOwnerDetails(data?._id)}>
                  Check out owner's details
                </button>
              )}
            </small>
            <div className="flex justify-center">
              <button
                className="btn w-full btn-sm btn-accent"
                onClick={() => purchaseRoom(data?._id)}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
      {showOwner === true ? (
        <div className="absolute z-50 bg-gray-400 rounded-md  border border-gray-100 h-1/2 w-1/2  left-[50%] top-[50%] -translate-x-[50%] translate-y-[-50%] flex flex-col overflow-hidden">
          <div className="w-full flex justify-between items-center p-2">
            <h1 className="text-xl font-bold font-sans">About the Owner</h1>
            <RxCross1
              onClick={() => setShowOwner(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex h-full">
            <div className="w-1/2 p-4">
              <p>
                <span>Name: </span>
                {owner?.fullname}{' '}
              </p>
              <p>
                <span>Contact: </span>
                {owner?.contact}{' '}
              </p>
              <p>
                <span>email: </span>
                {owner?.email}{' '}
              </p>
              <p>
                <span>Location: </span>
                {owner?.location}{' '}
              </p>
              <p>
                <span>Address: </span>
                {owner?.address}{' '}
              </p>
            </div>
            <div className="w-1/2  flex items-start  justify-center overflow-hidden">
              <div className="w-1/2 h-1/2 border-2 border-white p-2 shadow-lg shadow-zinc-900 mt-5 overflow-hidden rounded-full flex items-center justify-center">
                <img
                  src={`http://localhost:8000/${owner?.profilePic}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Card
