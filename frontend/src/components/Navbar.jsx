import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] px-40 bg-blue-500 flex justify-between items-center">
      <span className="text-white uppercase text-3xl  cursor-pointer">Auth</span>
      <div className="flex Linkst-none gap-5">
        <Link to={'/'} className="text-xl hover:text-white cursor-pointer transition-all">Home</Link>
        <Link to={'/login'} className="text-xl hover:text-white cursor-pointer transition-all">Login </Link>
        <Link to={'/signup'} className="text-xl hover:text-white cursor-pointer transition-all">sighup</Link>
      </div>
    </div>
  );
};

export default Navbar;
