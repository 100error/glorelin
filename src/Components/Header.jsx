import React from 'react'
import { NavLink } from 'react-router'
function Header() {
  return (
    <div className="bg-rose-800 p-3 w-full fixed top-0 flex items-center font-[Poppins] bg-opacity-90">
      <a href="" className="flex flex-col items-center">
        <img src="/velvlogo.png" alt="Velvet Logo" className="h-10 w-28 mr-4" />
      </a>
        <div className="flex items-center ml-auto space-x-6 pr-6">
          
                <NavLink to='/' className='text-white text-md font-semi-bold hover:bg-rose-800  hover:rounded-lg p-2 pl-4 pr-4'>Home</NavLink>

                <NavLink to='/Products' className='text-white text-md font-semi-bold hover:bg-rose-800 hover:border hover:rounded-full p-1 pl-2 pr-2'>Products</NavLink>

                <NavLink to='/Recipes' className='text-white text-md font-semi-bold hover:bg-rose-800 hover:border hover:rounded-full p-1 pl-2 pr-2'>Recipes</NavLink>

                <NavLink to='/About' className='text-white text-md font-semi-bold hover:bg-rose-800 hover:border hover:rounded-full p-1 pl-2 pr-2'>About</NavLink>

                <NavLink to='/Longin' className='text-white text-md font-semi-bold hover:bg-rose-800 hover:border hover:rounded-full p-1 pl-2 pr-2'>Log In</NavLink>

                


                
        </div>
    </div>
  )
}

export default Header
