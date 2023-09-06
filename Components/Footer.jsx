import Link from 'next/link'
import React from 'react'
import {BiSolidPhoneCall, BiMap, BiChevronRight} from "react-icons/bi"
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import {BsArrowRight} from 'react-icons/bs'
import {MdMarkEmailRead} from 'react-icons/md'
import Logo from './Elements/Logo'

const Footer = () => {
  return (
    <div className='bg-gradient-to-bl from-slate-800 via-sky-700 to-purple-700 w-full h-auto lg:'>
      <div className='px-[5rem] flex flex-col items-center  '>
          <div className='py-12 flex flex-col items-start w-full justify-center border-b-2 gap-8 border-white md:items-center lg:flex-row '>
              <div className='flex items-center gap-2 '>
                    <div className='text-[3rem] text-green-500'>
                        <BiSolidPhoneCall/>
                    </div>
                    <div className='flex flex-col items-center text-white uppercase mx-2'>
                        <h1>+00 000 000 00</h1>
                        <h1>hotline 24/7</h1>
                    </div>
                </div>
                <div className='flex items-center gap-2 '>
                    <div className='text-[3rem] text-green-500'>
                        <MdMarkEmailRead/>
                    </div>
                    <div className='flex flex-col items-start text-white uppercase mx-2'>
                        <h1>example@gmail.com</h1>
                        <h1>Free consult</h1>
                    </div>
                </div>
                <div className='flex items-center gap-2 '>
                    <div className='text-[3rem] text-green-500'>
                        <BiMap/>
                    </div>
                    <div className='flex flex-col items-start text-white uppercase mx-2'>
                        <h1>01 newyork USA</h1>
                        <h1>main office</h1>
                    </div>
                </div>
          </div>
      </div>
      <div className='px-[5rem] py-6'>
        <div className='flex flex-col items-start justify-center md:items-center  '>
            <div className='flex flex-col md:items-center '>
                <Logo />
                <p className='text-white py-2 md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt vitae dolores rem nemo fugit ab voluptatum iusto commodi! Deleniti!</p>
                <div className='text-white text-[3rem] flex gap-4 py-2'>
                    <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                </div>
            </div>
            <div className='lg:flex w-full lg:justify-between lg:pt-12'>
            <div className='text-white uppercase flex flex-col items-start pt-4  w-full  '>
                <h2 className=' text-lg font-bold text-green-300 pb-4 '>pages</h2>
                <div className='flex flex-col gap-4'>
                    <Link className='flex items-center hover:text-green-300 duration-200' href={'/'}>
                      <BiChevronRight/>
                      Home
                    </Link>
                    <Link className='flex items-center hover:text-green-300 duration-200' href={'/'}>
                      <BiChevronRight/>
                      About
                    </Link>
                    <Link className='flex items-center hover:text-green-300 duration-200' href={'/'}>
                      <BiChevronRight/>
                      Team
                    </Link>
                    <Link className='flex items-center hover:text-green-300 duration-200' href={'/'}>
                      <BiChevronRight/>
                      FAQ
                    </Link>
                </div>
            </div>
            <div className='text-white uppercase flex flex-col items-start pt-4  w-full '>
                <h2 className=' text-lg font-bold text-green-300 pb-4 '>Serivces</h2>
                <div className='flex flex-col gap-4'>
                    <Link className='flex items-center hover:text-green-300 duration-200' href={'/'}>
                      <BiChevronRight/>
                      Software Development
                    </Link>
                    <Link className='flex items-center hover:text-green-300 duration-200' href={'/'}>
                      <BiChevronRight/>
                      Ai Programmer
                    </Link>
                    <Link className='flex items-center hover:text-green-300 duration-200' href={'/'}>
                      <BiChevronRight/>
                      System Application
                    </Link>
                    <Link className='flex items-center hover:text-green-300 duration-200' href={'/'}>
                      <BiChevronRight/>
                      Network Solution
                    </Link>
                </div>
            </div>
            <div className='flex flex-col items-start text-white pt-4 md:items-center'>
                <h1 className='text-lg font-bold text-green-300 pb-4'>Newsletter</h1>
                <div className='flex'>
                  <input type="email" placeholder='Enter your email' className='py-2 px-4 focus:outline-none text-blue-950 rounded-xl' />
                  <button className='bg-blue-600 py-5 px-4 -ml-5 rounded-r-xl hover:bg-blue-950 hover:text-white'><BsArrowRight/></button>
                </div>
                <p className='py-2'>Lorem ipsum dolor sit amet.</p>
                <Link href={'/'} className='text-gray-400 hover:text-green-400'> Unsubscribe</Link>
            </div>              
            </div>
            
        </div>
        <div className='text-center flex items-center justify-center text-sm text-gray-500 pt-10 capitalize'>
                copyright @2023 CODE-B.Design by CODE-B
            </div>
      </div>
    </div>
  )
}

export default Footer