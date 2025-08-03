import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import { NavLink } from 'react-router-dom'



const Header = () => {
   const navLink=[
    {
      url:"/students",
      text:"Students"
    },
    { 
      url: "/students/form",
       text: "Student Form" 
      }
  ]

  return (
    <>
   
 <header className="bg-slate-950 text-white text-xl p-6">
  <div className="container mx-auto flex justify-between items-center px-10 py-2">
   
    <div className="flex items-center gap-4 font-extrabold text-3xl sm:text-4xl shadow-inner">
      <FaUserGraduate />
      <h1>Student Portal</h1>
    </div>

    
    <nav className='flex gap-5 me-20'>
     {navLink.map((link)=>(
        <NavLink key={link.text} to={link.url}className={({ isActive }) =>
  isActive
    ? "text-white text-lg font-extrabold border rounded-md bg-gray-800 p-2 hover:text-blue-600 transition-colors duration-300"
    : "text-gray-300 hover:text-white transition-colors duration-300"
}>
        {link.text}
      </NavLink>
     ))}
    </nav>
  </div>
</header>
   
    </>
  )
}

export default Header