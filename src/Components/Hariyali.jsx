import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import MainArea from './MainArea'

const Hariyali = () => {
  return (
    <div className='flex gap-0'>
      <Sidebar/>
      <div>
      <Navbar/>
      </div>
    </div>
  )
}

export default Hariyali