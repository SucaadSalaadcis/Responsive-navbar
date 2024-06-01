import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
    <div className='text-white p-2 bg-purple-500 flex  justify-around'>
     <h1 className='text-5xl font-bold'>Suad</h1>
    
     <i style={{display: open === true ? "none" : ""}} onClick={handleOpen} className='fa-solid fa-bars sm:hidden block absolute right-2 text-xl'></i>
     <i style={{display: open === true ? "block" : ""}} onClick={handleClose} class="fa-solid fa-xmark hidden absolute right-2 text-xl"></i>
     <div className=''>
     <ul style={{display: open === true ? "block" : ""}} className='hidden sm:flex  sm:mt-0 sm:space-y-0 flex-col sm:flex-row  mt-16 space-y-6 sm:space-x-12 text-xl'>
       <Link to={'/'}> <li className='md:ml-12'>Home</li></Link>
       <Link to={'/about'}> <li>About</li> </Link>
       <Link to={'/shop'}> <li>Shop</li> </Link> 
     </ul>

     </div>
    </div>
    </>
  )
}

export default Header
