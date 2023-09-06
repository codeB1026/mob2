import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import {BiSolidPhoneCall} from 'react-icons/bi'

const Hero = () => {
  return (
    <div className='bg-bg_image w-screen h-screen overflow-x-hidden hero py-6 px-[5rem]  '>
        <div className='flex flex-col w-full h-full  items-center justify-between  pt-12 lg:flex-row'>
               <div className='flex flex-col items-centr justify-center'>
                    <h1 className='text-4xl text-center pt-5 w-full text-white font-extrabold  '>High Quality </h1>
                    <h1 className='text-[3rem] text-center  w-full text-green-300 font-extrabold '>  IT-Solutions</h1>
                    <h1 className='text-2xl text-center capitalize leading-60 tracking-wider w-full text-white font-extrabold  '> for help your problems about technology</h1>
                    <p className='text-white py-4 text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolore illum necessitatibus consectetur numquam sequi sint cum quos impedit tempora.</p>
                    <div className='py-6 flex items-center '>
                        <input placeholder='Enter your Phone Number' type="text" className=' py-6 px-6 w-full bg-white rounded-[50px] border-0 outline-0  text-sm' />
                        <button className=' -mx-[5rem]  z-50 border-l-2 border-gray-800/50 opacity-70 px-4 py-2 rounded-r-[50px] hover:bg-green-500 duration-300 hover:text-red-600 '>
                            <BiSolidPhoneCall className='text-[2rem]'/>
                        </button>
                    </div>
                </div> 

                <div className='flex items-center justify-center mt-10 '>
                   <Image src={"/images/IMG.png"} width={700} height={800}/>
                </div>
        </div>
    </div>
  )
}

export default Hero