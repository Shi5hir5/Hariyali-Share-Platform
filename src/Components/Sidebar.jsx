import React from "react";
import { NavLink} from "react-router";

const Sidebar = () => {
  return (
    <div className="h-screen fixed z-20 hidden md:block   w-[18%]  bg-green-600">
      <div className=" pt-6  flex flex-col items-center ">
        <img
          src="src/assets/logo/logo_circle.png"
          alt=""
          className="hidden md:flex size-[105px] justify-center  rounded-full   "
        />
        <h1  className="text-white text-xl font-semibold py-3 px-4">
          Hariyali Share Platform
        </h1>
        <hr className=" border-white h-0 w-full" />
      </div>
      <div className="flex flex-col items-start pt-6  ">
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "text-2xl  font-semibold bg-gray-200 text-green-600  hover:bg-gray-200 hover:text-green-600 px-5 py-2 w-full " : "text-2xl text-white font-semibold hover:bg-gray-200 hover:text-green-600 px-5 py-2 w-full active:bg-gray-200"
        } >
          Dashboard
        </NavLink>
        <NavLink to="/applications"
          className={({ isActive }) =>
          isActive ? "text-2xl  font-semibold bg-gray-200 text-green-600  hover:bg-gray-200 hover:text-green-600 px-5 py-2 w-full " : "text-2xl text-white font-semibold hover:bg-gray-200 hover:text-green-600 px-5 py-2 w-full active:bg-gray-200"}
        >
          Application
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
