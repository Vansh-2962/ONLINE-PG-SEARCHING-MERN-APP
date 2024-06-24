import React, { useEffect, useState } from 'react'
import { ImLocation } from 'react-icons/im'
import { MdBedroomChild } from 'react-icons/md'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
const Rooms = () => {
  const navigate = useNavigate()
  const [allRooms, setAllRooms] = useState([])
  const authUser = useSelector((state) => state.auth.authUser)
  const listMyHome = () => {
    navigate('/listHome')
  }

  useEffect(() => {
    const getAllRooms = async () => {
      const res = await axios.get(
        'http://localhost:8000/api/v1/room/getAllRooms',
      )
      if (res) {
        console.log(res.data)
        setAllRooms(res.data)
        // console.log(allRooms)
      }
    }
    getAllRooms()
  }, [])

  return (
    <>
      {/* navbar */}
      <div className="w-full flex items-center justify-between shadow-md shadow-neutral-400 px-5 py-2 border-2 border-neutral-400 rounded-md">
        <h1 className="text-xl font-bold ">
          Experience Ultimate Comfort – Your New Home Awaits!
          {/* {allRooms?.title} */}
        </h1>
        <div className="md:flex md:items-center gap-3">
          <div className="dropdown dropdown-hover ">
            <div tabIndex={0} role="button" className="btn m-1 btn-sm">
              <ImLocation />
              Location
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content h-52  z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Ranchi</a>
              </li>
              <li>
                <a>Jamshedpur</a>
              </li>
              <li>
                <a>Dhanbad</a>
              </li>
              <li>
                <a>Bokaro</a>
              </li>
              <li>
                <a>Bangalore</a>
              </li>
              <li>
                <a>Delhi</a>
              </li>
              <li>
                <a>Noida</a>
              </li>
              <li>
                <a>Lucknow</a>
              </li>
              <li>
                <a>Mumbai</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover ">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              <MdBedroomChild />
              Room type
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Single room</a>
              </li>
              <li>
                <a>Double room</a>
              </li>
              <li>
                <a>Shared </a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover ">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              <FaIndianRupeeSign />
              Price
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>
                  {`< `}&#8377;{'3000'}
                </a>
              </li>
              <li>
                <a>
                  {' '}
                  {`< `}&#8377;{'6000'}
                </a>
              </li>
              <li>
                <a>
                  {' '}
                  {`< `}&#8377;{'10000'}
                </a>
              </li>
              <li>
                <a>
                  {' '}
                  {`< `}&#8377;{'15000'}
                </a>
              </li>
              <li>
                <a>
                  {' '}
                  {`< `}&#8377;{'20000'}
                </a>
              </li>
            </ul>
          </div>
          <label className="input input-bordered flex items-center bg-neutral-200 gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="w-full p-5">
        {authUser?.role === 'Poster' ? (
          <div className="w-1/2 p-3 border-2 shadow-md shadow-neutral-800 bg-red-400 rounded-md flex flex-col gap-3 items-center justify-center mx-auto">
            <h1 className="text-neutral-800 font-semibold text-xl">
              Earn While You Host – List Your Home as a PG!
            </h1>
            <button className="btn btn-neutral" onClick={listMyHome}>
              List my Home
            </button>
          </div>
        ) : (
          <div className="">
            <marquee className="bg-neutral-300 font-mono">
              if you want to list your home on a PG then signup as a Poster
            </marquee>
          </div>
        )}

        <h1 className="text-2xl mt-3 ">Available PG's</h1>
        <div className="w-full md:grid md:grid-cols-4 p-5 gap-x-5 gap-y-5">
          {allRooms?.map((item) => (
            // console.log(item)
            <Card data={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Rooms
