import React from 'react'

const NavItems = () => {
  return (
    <Link to="/">
    <div className="rounded-full w-16 h-16  flex justify-center items-center shadow-xl shadow-red-700  ">
      <MdHomeFilled size={26} color="red" />
      {/* <h1>Home</h1> */}
    </div>
  </Link>
  )
}

export default NavItems;