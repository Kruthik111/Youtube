import React from 'react'
import {Outlet, Link } from 'react-router-dom';
import { CgSmileSad } from "react-icons/cg";
const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
    <div className="rounded-lg bg-white p-24 text-center shadow-xl">
    <div className='flex w-full justify-center'><CgSmileSad size={60} color='red'/></div>
      <h1 className="mb-4 text-4xl font-bold text-red-500">404</h1>
      <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
      <Link to="/" className="mt-4 inline-block rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"> Go back to Home </Link>
    </div>
  </div>
  )
}

export default NotFound;