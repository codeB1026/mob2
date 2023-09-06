"use client"
import React, { useState } from 'react'
import Logo from './Elements/Logo'
import Link from 'next/link'
import {FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }


  return (
    <>
        <div className=' w-screen '>
           <div className='w-full fixed bg-blue-950 z-50'>  
              <div className='w-full  py-4 flex items-center justify-between px-[5rem]  '>
                  <div>
                    <Logo />
                  </div>
                  <div className='text-gray-200   gap-10 hidden lg:flex'>
                    {/* desktop navigation  */}

                    <Link href={'/'} className='hover:text-green-400 duration-200'>Home</Link>
                    <Link href={'/'} className='hover:text-green-400 duration-200'>Projects</Link>
                    <Link href={'app//Services'} className='hover:text-green-400 duration-200'>Serivces</Link>
                    <Link href={'/'} className='hover:text-green-400 duration-200'>Team</Link>
                    <Link href={'/'} className='hover:text-green-400 duration-200'>Contact</Link>
                  </div>


                  <div className=' gap-5 hidden lg:flex'>
                    <button className='text-white hover:text-green-600 duration-300'>Sign in</button>
                    <button className='primary_btn '>Sign Up</button>
                  </div>

                  <div className='text-white flex cursor-pointer   lg:hidden' onClick={handleNav}>
                    <FaBars/>
                  </div>
                </div>
        
          <div className={nav ? 'fixed top-0 left-0 w-full h-screen bg-black/70 lg:hidden' : ""}>
                 <div className={nav ? 'fixed top-0 left-0 h-screen w-[75%] sm:w-[60%] md:w-[60%] bg-blue-950 z-50 ease-in duration-500':
                ' fixed top-0 left-[-100%] h-screen  bg-blue-950 ease-in duration-500'}>
                   <div className='px-4 py-4'>
                    <div className='flex items-center justify-between  '>
                          <Logo />
                          <div onClick={handleNav}>
                              <button><GrClose  className='p-2 text-4xl bg-white shadow-2xl rounded-full cursor-pointer' /></button>
                          </div>
                      </div>
                    <div className='text-gray-200 flex flex-col items-center justify-center py-20 gap-10 '>
                      <Link href={'/'} className='hover:text-green-400 duration-200'>Home</Link>
                      <Link href={'/'} className='hover:text-green-400 duration-200'>Projects</Link>
                      <Link href={'/Services'} className='hover:text-green-400 duration-200'>Serivces</Link>
                      <Link href={'/'} className='hover:text-green-400 duration-200'>Team</Link>
                      <Link href={'/'} className='hover:text-green-400 duration-200'>Contact</Link>
                  </div>
                    <div className=' gap-5 flex flex-col items-center justify-center '>
                      <button className='text-white hover:text-green-600 duration-300'>Sign in</button>
                      <button className='primary_btn '>Sign Up</button>
                    </div>
                   </div>
                 </div>
          </div>
          </div> 
          </div>
    
    </>
  )
}

export default Navbar