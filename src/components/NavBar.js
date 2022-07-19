// rfce
import React from "react";
import Logo from "../logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div
        className="border 
        pl-12 py-4 space-x-8
         flex  items-center 
        "
      >
        <img className="w-[50px] md:w-[60px]" src={Logo}></img>
        <Link
          to="/"
          className={`text-blue-400 
            font-bold 
            text-xl
            md:text-3xl`}
        >
          Movies
        </Link>
        <Link
          to="favourites"
          className="text-blue-400 font-bold text-xl md:text-3xl"
        >
          Favourites
        </Link>
        <Link
          to="login"
          className="text-blue-400 font-bold text-xl md:text-3xl"
        >
          LogIn
        </Link>
        <Link
          to="signup"
          className="text-blue-400 font-bold text-xl md:text-3xl"
        >
          SignUp
        </Link>
      </div>
    </>
  );
}

export default NavBar;
