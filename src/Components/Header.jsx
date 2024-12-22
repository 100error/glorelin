import React from 'react';
import { NavLink } from 'react-router';

function Header() {
  return (
    <div className="bg-rose-800 p-3 w-full fixed top-0 flex flex-wrap items-center font-[Poppins] bg-opacity-90 z-50">
 
      <a href="" className="flex flex-col items-center">
        <img src="/velvlogo.png" alt="Velvet Logo" className="h-10 w-28 mr-4" />
      </a>

     
      <div className="flex flex-wrap items-center justify-center w-full md:w-auto space-x-0 md:space-x-6 mt-2 md:mt-0">
        <NavLink
          to="/"
          className="text-white text-sm md:text-md font-semi-bold hover:bg-rose-700 hover:rounded-lg p-2 pl-4 pr-4"
        >
          Home
        </NavLink>

        <NavLink
          to="/Products"
          className="text-white text-sm md:text-md font-semi-bold hover:bg-rose-700 hover:rounded-lg p-2 pl-4 pr-4"
        >
          Products
        </NavLink>

        <NavLink
          to="/Recipes"
          className="text-white text-sm md:text-md font-semi-bold hover:bg-rose-700 hover:rounded-lg p-2 pl-4 pr-4"
        >
          Recipes
        </NavLink>

        <NavLink
          to="/About"
          className="text-white text-sm md:text-md font-semi-bold hover:bg-rose-700 hover:rounded-lg p-2 pl-4 pr-4"
        >
          About
        </NavLink>

        <NavLink
          to="/Login"
          className="text-white text-sm md:text-md font-semi-bold hover:bg-rose-700 hover:rounded-lg p-2 pl-4 pr-4"
        >
          Log In
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
