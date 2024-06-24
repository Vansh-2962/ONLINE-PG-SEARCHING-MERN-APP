import React from 'react'
import roomImg from '../assets/room.png'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
  const navigate = useNavigate()
  const checkOutRooms = () => {
    navigate('/rooms')
  }

  return (
    <>
      <div className="h-[84vh] md:grid md:grid-cols-2 sm:flex sm:lex-col">
        <div className="flex items-center justify-center">
          <div className="w-3/4 flex flex-col gap-4">
            <h1 className="text-3xl font-bold ">
              Perfect PG Living – Tailored to Your Needs, Right at Your
              Fingertips!
            </h1>
            <small className="font-sans">
              Discover a seamless and personalized PG search experience with our
              platform. We understand that finding the right place to live is
              more than just about the room; it's about comfort, convenience,
              and community. Whether you're a student, a professional, or anyone
              in between, our extensive listings are curated to meet your unique
              needs. With user-friendly search tools, detailed property
              descriptions, and high-quality images, finding your perfect PG has
              never been easier. Start your journey today and step into a living
              space that feels like home. Your ideal PG is just a click away!
            </small>
            <button className="btn btn-accent w-1/4 " onClick={checkOutRooms}>
              Explore
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img src={roomImg} alt="" className="h-[32rem]" />
        </div>
      </div>
    </>
  )
}

export default Homepage
