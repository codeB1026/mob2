import React from 'react'
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import {MdMarkEmailRead} from 'react-icons/md'

const FormPage = () => {
  return (
    <div className='w-full h-auto bg-[#1a075d] flex flex-col-reverse items-center justify-center px-[5rem] lg:grid lg:grid-cols-2 lg:items-end lg:justify-center '>
        <div className='flex items-end justify-start '>
               <div className='w-full h-full bg-white rounded-t-xl sm:w-[400px] sm:-mt-10 md:mt-[-8rem]  lg:h-[80%] lg:w-[80%]'>
                    <form action="" className='flex flex-col px-12 py-10 lg:py-0 xl:py-8'>
                            <h1 className='py-6 text-[2rem] text-blue-800 text-center uppercase font-bold '>Consultation for free</h1>
                            <p className='pb-6 text-[1rem] text-blue-950 text-center '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, veniam?</p>
                            <input type="text" placeholder='Your Name' className='w-full px-6 py-4 bg-blue-300/50 my-4 rounded-[30px] focus:outline-none text-blue-950'  />
                            <input type="Number" placeholder='Your Phone Number' className='w-full px-6 py-4  bg-blue-300/50 my-4 rounded-[30px] focus:outline-none text-blue-950'  />
                            <textarea name="text" id=""  rows="5" placeholder='Enter your Problem'className='w-full px-6 py-4                       bg-blue-300/50 my-4 rounded-[30px] focus:outline-none text-blue-950'  ></textarea>
                            <button type='submit' className='my-4 py-3 px-6 bg-blue-600 rounded-[20px] text-white hover:bg-blue-800 duration-200'>Send</button>
                    </form>
               </div>
        </div>
        <div className='h-screen w-full pt-40 '>
               <div className='flex flex-col items-start  lg:items-start lg:text-start  '>
                    <h1 className='text-2xl text-blue-400 font-bold pb-6'>Our Success</h1>
                    <h1 className='text-4xl font-bold  text-white capitalize py-1'>we have helped more than </h1>
                    <h1 className='text-4xl font-bold  text-white capitalize py-1' > 700+ client worldwide </h1>
                    <p className='text-xl pt-6 text-green-300'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam neque labore accusantium sint mollitia porro hic soluta?</p>
               </div>
               <h1 className='text-white text-2xl text-center py-6 sm:pt-10 '>Follow us via</h1>
               <div className='text-white text-[4rem] flex items-center justify-evenly gap-4 sm:mt-10 '>
                    <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <MdMarkEmailRead  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
    
                </div>
        </div>
    </div>
  )
}

export default FormPage