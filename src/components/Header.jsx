import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsCircleSharp, IoSunnySharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { ImVideoCamera } from "react-icons/im";
import { BsMoonStarsFill } from "react-icons/bs";
import logo from "../assets/youtube-icon.ico";
import { SearchContext, ThemeContext } from "../App";

const Header = () => {
  const { handleToggleTheme, theme } = useContext(ThemeContext);
  const { searchRef, setFocused, focused } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  var keylistener = document.addEventListener("keyup", (event) => {
    var keysPressed = {};
    keysPressed[event.key] = true;
    if (event.key === "/") {
      setTimeout(() => {
        searchRef.current.focus();
      }, 500);
      setFocused(true);
    }
    document.removeEventListener("keydown", keylistener);
  });

  function handleFocus() {
    setFocused(true);
    document.removeEventListener("keyup", keylistener);
  }

  function handleBlur() {
    setFocused(false);
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Prevents default form submission behavior
    if (searchValue) {
      var searchQuery = searchValue.split(" ").join("+");
      navigate(`/results/?search_query=${searchQuery}`); // Redirect to new page
      setFocused(false);
      document.activeElement.blur();
    }
  }
  return (
    <div
      className={` font-display w-full shadow-sm shadow-slate-600 h-14 bg-white dark:bg-gray-800 fixed z-10  top-0 flex justify-center items-center px-5 opacity-95    ${
        focused ? "justify-center sm:justify-between" : "justify-between"
      }`}
    >
      <Link
        to="/"
        className={`${
          focused || searchValue.length > 0 ? "hidden sm:flex" : "flex"
        }`}
      >
        <div className="h-full flex items-center gap-1 opacity-100 ">
          <div className=" flex items-center rounded-full w-8 h-8">
            <img src={logo} alt="" className="w-full p-0" draggable="false" />
          </div>
          <h1 className="text-3xl font-bold dark:text-white text-black">
            Youtube
          </h1>
        </div>
      </Link>
      <div
        className={`${
          focused || searchValue.length > 0
            ? "w-full sm:w-auto sm:flex"
            : "flex"
        }`}
      >
        <form
          className={`flex items-center  sm:justify-center  mx-auto  dark:bg-gray-700   rounded-lg opacity-100 w-full border-none md:border-solid  sm:bg-slate-300 border-black border-[1px] dark:border-none font-bold ${
            focused || searchValue.length > 0 ? "bg-slate-300 " : ""
          }`}
          onSubmit={handleSubmit}
        >
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="flex rounded-lg pr-3 w-full">
            <input
              type="text"
              id="voice-search"
              className={`  bg-transparent border  text-gray-900 text-sm rounded-lg  border-none focus:outline-none block  p-2    dark:placeholder-gray-400 dark:text-white transition-all duration-1000 ${
                focused || searchValue.length > 0
                  ? "w-[85%] md:w-80 flex"
                  : " hidden sm:flex  sm:w-64 "
              }  sm:focus:w-80 `}
              placeholder="Type '/' | Search...."
              ref={searchRef}
              onFocus={handleFocus}
              // onKeyDownCapture={}
              onBlur={handleBlur}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              type="button"
              className={`inset-y-0 end-0  sm:flex  items-center pe-3 max-h-9 ${
                focused ? "" : "hidden sm:block"
              } `}
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white "
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
              type="button"
              className="inline-flex items-center  text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:text-white"
              onClick={handleFocus}
            >
              <svg
                className="w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
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
      <div
        className={`flex justify-around items-center w-48 ${
          focused || searchValue.length > 0 ? "hidden sm:flex" : "flex"
        }`}
      >
        {/* <span className="fill-black dark:text-white">
          <ImVideoCamera size={23} />
        </span> */}

        <span className="fill-black dark:text-white">
          <IoNotificationsCircleSharp size={25} width={9} />
        </span>
        <span className="fill-black dark:text-white">
          <FaUserPlus size={25} />
        </span>
        <span
          className="fill-black dark:text-white"
          onClick={handleToggleTheme}
        >
          {theme === "dark" ? <BsMoonStarsFill /> : <IoSunnySharp size={20} />}
        </span>
      </div>
    </div>
  );
};

export default Header;
