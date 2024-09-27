import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { SiShortcut } from "react-icons/si";
import { MdLiveTv } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TbSquareRoundedLetterY } from "react-icons/tb";
import NavItems from "./NavItems";

export default function Navbar(props) {
  const [expand, setExpand] = useState(true);
  const [componentSize, setComponentSize] = useState(24);

  return (
    <nav className="fixed right-7 bottom-14 ">
      <ul className="">
        <div
          className={`${
            expand ? "flex" : "hidden"
          } transition ease-in-out flex gap-2 lg:gap-4 `}
        >
          <NavItems
            color="red"
            title="Home"
            to="/"
            comp={<MdHomeFilled color="red" size={componentSize} />}
          />
          <NavItems
            color="purple"
            to="/shorts"
            title="Shorts"
            comp={<SiShortcut color="purple" size={componentSize} />}
          />
          <NavItems
            color="orange"
            to="/subscription"
            title="Subscriptions"
            comp={<MdLiveTv color="orange" size={componentSize} />}
          />

          <div
            onClick={() => {
              props.setFocused(true);
              setTimeout(() => {
                props.searchRef.current.focus();
              }, 500);
            }}
            className="rounded-full w-14 h-14  lg:w-16 lg:h-16  flex justify-center items-center shadow-lg shadow-slate-800 lg:hidden bg-white duration-300 ease-in-out border-solid  border-black border-[1px] dark:border-none"
            title="Search"
          >
            <FaSearch size={26} color="blue" />
          </div>

          <div
            title="close"
            className="rounded-full   flex justify-center items-center shadow-lg shadow-black bg-white w-14 h-14  lg:w-16 lg:h-16 border-solid  border-black border-[1px] dark:border-none"
            onClick={() => setExpand(false)}
          >
            <IoMdClose size={26} color="black" />
          </div>
        </div>
        <div
          className={`rounded-full flex justify-center items-center shadow-lg hover:shadow-lg bg-white shadow-black w-14 h-14 lg:w-16 lg:h-16 border-solid  border-black border-[1px] dark:border-none ${
            expand ? "hidden" : "flex"
          }  `}
          onClick={() => setExpand(true)}
          title="expand"
        >
          <TbSquareRoundedLetterY size={26} color="black" />
        </div>
      </ul>
    </nav>
  );
}
