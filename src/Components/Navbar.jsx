import React from 'react'
import { NavLink } from 'react-router';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from'react';
<GiHamburgerMenu />

const Navbar = () => {

  const [show, setShow]= useState(false)

  const handleShow = ()=>[
    setShow(true),
  ]

  return (
    <div className='fixed z-10 w-full'>
      <div className='flex  md:justify-end justify-between items-center  py-3 px-10 bg-green-600'>
        <img src="src/assets/logo/logo_circle.png" alt="" className='rounded-full md:hidden  size-12' />
        <div className='hidden md:flex items-center gap-4'>
          <h1 className='text-xl text-white font-medium'>Welcome, Shishir</h1>
          <button className='bg-red-600 text-xl text-white rounded-3xl px-2 py-2'>Logout</button>

        </div>
        <GiHamburgerMenu onClick={handleShow} className='flex md:hidden size-10 text-white' />
        
        </div>
        
    </div>
  )
}

export default Navbar