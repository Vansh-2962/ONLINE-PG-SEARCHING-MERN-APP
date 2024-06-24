import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="h-[84vh] md:grid md:grid-cols-2 sm:flex sm:lex-col">
        <div className="flex items-center justify-center">
          <img
            src="https://imgs.search.brave.com/MyupafOg3jSy-sQ8zkO6teIKWBVelWsEr9rxVeOOOFs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdG9y/aWVzLmZyZWVwaWts/YWJzLmNvbS9zdG9y/YWdlLzIyODcvQWJv/dXQtVXMtUGFnZV9N/ZXNhLWRlLXRyYWJh/am8tMS1hbWljby5z/dmc.svg"
            alt=""
            className="h-[28rem]"
          />
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="w-3/4 flex flex-col justify-start gap-4">
            <h1 className="text-neutral-700 font-bold text-4xl">About us</h1>
            <p>
              Welcome to PGSolutions, your premier online platform for finding
              the perfect Paying Guest (PG) accommodation. At PGSolutions, we
              understand that finding a comfortable and secure place to stay can
              be a daunting task, whether you're a student, a working
              professional, or someone relocating to a new city. That's why
              we're dedicated to making the process as seamless and hassle-free
              as possible.
            </p>
            <Link
              to={'/aboutTheCompany'}
              className="btn btn-outline btn-default w-1/4 btn-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
