import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { MdHomeFilled } from "react-icons/md";
import { SiShortcut } from "react-icons/si";
import { MdLiveTv } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TbSquareRoundedLetterY } from "react-icons/tb";

{
  /*
  export default function Navbar(){
  return (
    <nav>
          <ul>
            <li>
              <Link to="/Notfound">NotFound</Link>
            </li>
            <li>
              <Link to="/Company">Company</Link>
            </li>
            <li>
              <Link to="/Team">Team</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
  )
}


  */
}

export default function Navbar() {
  const [expand, setExpand] = useState(false);
  return (
    <nav className="fixed right-5 bottom-14">
      <ul className="">
        <div className={`${expand ? "flex" : "hidden"} transition ease-in-out flex gap-4 `}>
          <Link to="/">
            <div className="rounded-full w-16 h-16  flex justify-center items-center shadow-xl shadow-red-700  ">
              <MdHomeFilled size={26} color="red" />
              {/* <h1>Home</h1> */}
            </div>
          </Link>
          <Link to="/shorts">
            <div className="rounded-full w-16 h-16  flex justify-center items-center shadow-xl shadow-green-700  ">
              <SiShortcut size={26} color="green" />
              {/* <h1>Shorts</h1> */}
            </div>
          </Link>
          <Link to="/shorts">
            <div className="rounded-full w-16 h-16  flex justify-center items-center shadow-xl shadow-orange-700  ">
              <MdLiveTv size={26} color="orange" />
              {/* <h1>Shorts</h1> */}
            </div>
          </Link>
          <Link to="/shorts">
            <div className="rounded-full w-16 h-16  flex justify-center items-center shadow-xl hover:shadow-lg shadow-blue-700 ">
              <FaSearch size={26} color="blue" />
              {/* <h1>Shorts</h1> */}
            </div>
          </Link>
            <div className="rounded-full w-16 h-16  flex justify-center items-center shadow-xl hover:shadow-lg shadow-black  "
             onClick={()=>setExpand(false)}>
              <IoMdClose size={26} color="black" />
              {/* <h1>Shorts</h1> */}
            </div>
       
        </div>
        <div
         className={`rounded-full w-16 h-16  flex justify-center items-center shadow-xl hover:shadow-lg shadow-black ${expand?'hidden':'flex'}  `}
         onClick={()=>setExpand(true)} >
          <TbSquareRoundedLetterY size={26} color="black" />
        </div>
      </ul>
    </nav>
  );
}
