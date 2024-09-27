import React from "react";
import { Link } from "react-router-dom";

const NavItems = (props) => {
  return (
    <Link to={props.to}>
      <div
        title={props.title}
        className={`rounded-full w-14 h-14 lg:w-16 lg:h-16  flex justify-center items-center  shadow-lg shadow-slate-800 bg-white border-solid  border-black border-[1px] dark:border-none`}
      >
        {props.comp}
      </div>
    </Link>
  );
};

export default NavItems;
