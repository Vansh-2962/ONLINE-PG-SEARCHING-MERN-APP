import React from 'react'
import { Link } from 'react-router-dom'

const AboutUsMore = () => {
  return (
    <>
      <div className="my-7 h-full w-3/4 mx-auto flex flex-col gap-12">
        <div>
          <h1 className="font-bold text-2xl">About Our Company</h1>
          <p className="mt-2">
            Welcome to PGSolutions, your premier online platform for finding the
            perfect Paying Guest (PG) accommodation. At PGSolutions, we
            understand that finding a comfortable and secure place to stay can
            be a daunting task, whether you're a student, a working
            professional, or someone relocating to a new city. That's why we're
            dedicated to making the process as seamless and hassle-free as
            possible. Our Mission
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Our Mission</h2>
          <p className="mt-2">
            Our mission at PGSolutions is simple: to connect you with the best
            PG accommodations that meet your needs and preferences. We aim to
            provide a comprehensive, user-friendly platform that simplifies the
            search for quality living spaces, ensuring you feel right at home,
            wherever you are.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">What We Offer</h2>
          <p className="mt-2">
            <ul className="list-disc ml-10  flex flex-col gap-3">
              <li>
                <span className="font-semibold">Extensive Listings:</span> We
                offer a wide range of PG listings across multiple cities,
                catering to different budgets and preferences. From cozy single
                rooms to luxurious shared spaces, you'll find a variety of
                options to choose from.
              </li>
              <li>
                <span className="font-semibold">Detailed Information:</span>{' '}
                Each listing comes with detailed descriptions, high-quality
                photos, and virtual tours, giving you a clear understanding of
                what to expect. We provide all the essential details such as
                amenities, location, pricing, and house rules.
              </li>
              <li>
                <span className="font-semibold">Verified Accommodations: </span>{' '}
                Your safety and satisfaction are our top priorities. We ensure
                that all PG listings on our platform are verified and meet our
                stringent quality standards. You can trust that every option is
                safe, clean, and well-maintained.
              </li>
              <li>
                <span className="font-semibold">Advanced Search Filters: </span>{' '}
                Our advanced search filters allow you to customize your search
                based on your specific needs. Filter by location, budget,
                amenities, and more to find the perfect PG that matches your
                lifestyle.
              </li>
              <li>
                <span className="font-semibold">User Reviews and Ratings:</span>{' '}
                Hear from fellow users about their experiences with different PG
                accommodations. Our review and rating system helps you make
                informed decisions based on honest feedback from previous
                tenants.
              </li>
              <li>
                <span className="font-semibold">
                  Seamless Booking Process:{' '}
                </span>{' '}
                Once you've found the ideal PG, our platform enables a smooth
                and straightforward booking process. Secure your spot with just
                a few clicks, and move in with confidence.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Why Choose PGSolutions?</h2>
          <p className="mt-2">
            <ul className="list-disc ml-10  flex flex-col gap-3">
              <li>
                <span className="font-semibold">Expert Guidance:</span> Our team
                of experts is always here to assist you with personalized
                recommendations and guidance. We take the time to understand
                your requirements and help you find the best possible options.
              </li>
              <li>
                <span className="font-semibold">Commitment to Quality: </span>{' '}
                We are committed to providing high-quality services and ensuring
                customer satisfaction. Our rigorous verification process ensures
                that you have access to the best PG accommodations available.
              </li>
              <li>
                <span className="font-semibold">Continuous Improvement: </span>{' '}
                We constantly update our platform with the latest listings and
                features to enhance your experience. We value your feedback and
                strive to continuously improve our services.
              </li>
            </ul>
          </p>
        </div>
        <p>
          At PGSolutions, we believe that finding the right place to stay should
          be an exciting and enjoyable experience. Let us take the stress out of
          your PG search and help you find your home away from home.
        </p>
        <div>
          <h2 className="font-bold text-xl">Contact Us</h2>
          <p className="mt-2">
            If you have any questions or need assistance, please don't hesitate
            to reach out to our friendly support team. We're here to help you
            every step of the way. Thank you for choosing PGSolutions – your
            trusted partner in finding the perfect PG accommodation.
          </p>
          <Link
            to={'/contact'}
            className="btn btn-sm btn-outline btn-accent mt-3"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default AboutUsMore
