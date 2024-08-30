import { React, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { ImVideoCamera } from "react-icons/im";

const Header = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [focused, setfocused] = useState(false);

  document.addEventListener("keydown", (event) => {
    if (event.key === "s") {
      props.searchRef.current.focus();
      // setSearchValue(searchValue.slice(0,-1))
      // document.removeEventListener("keydown");
      setfocused(true);
    }
  });

  return (
    <div className="w-full h-14 bg-gray-800 fixed flex justify-between items-center px-5">
      <Link to="/">
        <div className=" h-full flex items-center gap-1">
          <div className=" flex items-center rounded-full w-8 h-8">
            <img src="./youtube-icon.ico" alt="" className="w-full p-0" />
          </div>
          <h1 className="text-3xl font-bold dark:text-white text-black">
            Youtube
          </h1>
        </div>
      </Link>
      <div>
        <form className="flex  items-center  mx-auto bg-gray-700 dark:border-gray-600 px-2 rounded-lg">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="flex">
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border  text-gray-900 text-sm rounded-lg border-none focus:border-none focus:w-80 transition-all ease-linear duration-300 w-80 empty:w-64  focus:outline-none block  p-2  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white "
              placeholder="Search...."
              ref={props.searchRef}
              // onFocus={()=>setfocused(true)}

              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              type="button"
              className=" inset-y-0 end-0 flex  items-center pe-3 max-h-9"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z "
                />
              </svg>
            </button>
            <button
              type="submit"
              className=" inline-flex items-center  text-sm font-medium "
            >
              <svg
                className="w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-around items-center w-48">
        <span className="fill-black dark:text-white">
          <ImVideoCamera size={23} />
        </span>

        <span className="fill-black dark:text-white">
          <IoNotificationsCircleSharp size={25} width={9} />
        </span>
        <span className="fill-black dark:text-white">
          <FaUserPlus size={25} />
        </span>
      </div>
    </div>
  );
};

export default Header;
