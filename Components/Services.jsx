import Link from 'next/link'
import React from 'react'
import {BsChevronRight} from "react-icons/bs"


const Services = () => {
  return (
    <div className='flex flex-col px-[5rem] w-full h-auto bg-gradient-to-bl from-fuchsia-900 via-purple-800 to-violet-100 pb-10 '>
        <div className='py-16 flex flex-col items-center justify-center gap-2 text-center'>
            <h2 className=' text-xl text-blue-200 capitalize font-bold tracking-widest flex '>services</h2>
            <h1 className='text-2xl capitalize text-primary text-white font-bold'>we provide all in one solution</h1>
            <h1 className='text-4xl capitalize text-primary text-white font-bold'>for every <span className='text-green-300 font-extrabold'>IT</span> job</h1>
        </div>
        <div className=''>
            <div className='flex flex-col w-full items-center justify-center gap-4 text-center md:grid    md:grid-cols-2 md:items-center md:gap-4 xl:grid-cols-4  '>
                <div className='group flex flex-col items-center justify-start bg-blue-800 rounded-xl   h-full  w-full hover:bg-blue-900 duration-200 cursor-pointer shadow-gray-600 shadow-lg  border-2 '>
                  <h1 className='text-2xl capitalize text-white text-primary pt-12 group-hover:text-blue-300'>software Development</h1>
                  <p className='text-sm py-4 px-4 text-green-300 pt-8  group-hover:text-white '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ab culpa quod, possimus voluptas alias suscipit deleniti iusto in ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque architecto et qui nulla aliquid! Nam magnam asperiores odit a.</p>
                  <Link href={'/'} className='flex items-center gap-2 text-white pt-6 group-hover:text-green-500 pb-4'>Learn More <BsChevronRight /></Link>
                </div>
                <div className='group flex flex-col items-center justify-start bg-blue-800 rounded-xl   h-full w-full  hover:bg-blue-900 duration-200 cursor-pointer shadow-gray-600 shadow-lg  border-2 '>
                  <h1 className='text-2xl capitalize text-white text-primary pt-12 group-hover:text-blue-300'>software Development</h1>
                  <p className='text-sm py-4 px-4 text-green-300 pt-8  group-hover:text-white '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ab culpa quod, possimus voluptas alias suscipit deleniti iusto in ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque architecto et qui nulla aliquid! Nam magnam asperiores odit a.</p>
                  <Link href={'/'} className='flex items-center gap-2 text-white pt-6 group-hover:text-green-500 pb-4'>Learn More <BsChevronRight /></Link>
                </div>
                <div className='group flex flex-col items-center justify-start bg-blue-800 rounded-xl  h-full w-full   hover:bg-blue-900 duration-200 cursor-pointe shadow-gray-600 shadow-lg 0 border-2 '>
                  <h1 className='text-2xl capitalize text-white text-primary pt-12 group-hover:text-blue-300'>software Development</h1>
                  <p className='text-sm py-4 px-4 text-green-300 pt-8  group-hover:text-white '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ab culpa quod, possimus voluptas alias suscipit deleniti iusto in ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque architecto et qui nulla aliquid! Nam magnam asperiores odit a.</p>
                  <Link href={'/'} className='flex items-center gap-2 text-white pt-6 group-hover:text-green-500 pb-4'>Learn More <BsChevronRight /></Link>
                </div>
                <div className='group flex flex-col items-center justify-start bg-blue-800 rounded-xl   h-full w-full hover:bg-blue-900 duration-200 cursor-pointer  shadow-gray-600 shadow-lg border-2 '>
                  <h1 className='text-2xl capitalize text-white text-primary pt-12 group-hover:text-blue-300'>software Development</h1>
                  <p className='text-sm py-4 px-4 text-green-300 pt-8  group-hover:text-white '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ab culpa quod, possimus voluptas alias suscipit deleniti iusto in ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque architecto et qui nulla aliquid! Nam magnam asperiores odit a.</p>
                  <Link href={'/'} className='flex items-center gap-2 text-white pt-6 group-hover:text-green-500 pb-5'>Learn More <BsChevronRight /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services