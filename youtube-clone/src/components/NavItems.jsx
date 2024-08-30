import React from "react";
import { Link } from "react-router-dom";

const NavItems = (props) => {

  return (
   <Link to={props.to}>
    <div
      className={`rounded-full w-14 h-14 lg:w-16 lg:h-16  flex justify-center items-center  shadow-lg shadow-${props.color}-400 bg-white`}
    >
      {props.comp}
    </div>
   </Link>
  );
};

export default NavItems;
