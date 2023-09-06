'use client'
import React from 'react'
import Image from 'next/image';
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


function Team() {
  return (
    <div className='w-full h-auto px-[5rem] bg-blue-950 py-12 md:py-6 xl:grid xl:grid-cols-2 xl:items-center xl:py-0'>
        <div>
            <h1 className='text-2xl text-blue-600 text-center font-bold uppercase mt-12 xl:mt-0 xl:pb-4'> Team</h1>
            <h1 className='text-4xl text-white text-center font-extrabold capitalize mt-12 xl:mt-0'>our certified experts</h1>
        </div>

    <div className='py-12'>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        className="mySwiper"
    >

        <SwiperSlide className='w-full h-auto bg-white rounded-xl border-2 border-red-600   '>
            <div className='w-full h-full p-4 curosr-pointer flex flex-col items-center justify-center md:flex md:flex-row xl:flex-col'>
                <div className='bg-[#a5aafa] w-full flex items-center justify-center rounded-xl'>
                    <Image src={'/images/avatar-8.jpg'} width={200} height={400} className='' />
                </div>
                <div className='text-center w-full h-full py-2  '>
                    <h1 className='text-[2rem] capitalize font-bold py-1  '>macklum Dave</h1>
                    <h2 className='text-[1rem] uppercase font-semibold '>code expert</h2>

                    <div className=' itms-center justify-center w-full h-full py-6 gap-3 text-[4rem] text-white hidden md:flex xl:hidden'>
                        <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                        <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                        <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    </div>
                </div>
                <div className='flex itms-center justify-center w-full h-full py-6 gap-3 text-[4rem] text-white md:hidden xl:flex'>
                    <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-auto bg-white rounded-xl border-2 border-red-600   '>
            <div className='w-full h-full p-4 curosr-pointer flex flex-col items-center justify-center md:flex md:flex-row xl:flex-col'>
                <div className='bg-[#6cdef3] w-full flex items-center justify-center rounded-xl'>
                    <Image src={'/images/avatar-9.jpg'} width={200} height={400} className='' />
                </div>
                <div className='text-center w-full h-full py-2  '>
                    <h1 className='text-[2rem] capitalize font-bold py-1  '>macklum Dave</h1>
                    <h2 className='text-[1rem] uppercase font-semibold '>code expert</h2>

                    <div className=' itms-center justify-center w-full h-full py-6 gap-3 text-[4rem] text-white hidden md:flex xl:hidden'>
                        <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                        <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                        <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    </div>
                </div>
                <div className='flex itms-center justify-center w-full h-full py-6 gap-3 text-[4rem] text-white md:hidden xl:flex'>
                    <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-auto bg-white rounded-xl border-2 border-red-600   '>
            <div className='w-full h-full p-4 curosr-pointer flex flex-col items-center justify-center md:flex md:flex-row xl:flex-col'>
                <div className='bg-[#a5aafa] w-full flex items-center justify-center rounded-xl'>
                    <Image src={'/images/avatar-11.jpg'} width={200} height={400} className='' />
                </div>
                <div className='text-center w-full h-full py-2  '>
                    <h1 className='text-[2rem] capitalize font-bold py-1  '>macklum Dave</h1>
                    <h2 className='text-[1rem] uppercase font-semibold '>code expert</h2>

                    <div className=' itms-center justify-center w-full h-full py-6 gap-3 text-[4rem] text-white hidden md:flex xl:hidden'>
                        <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                        <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                        <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    </div>
                </div>
                <div className='flex itms-center justify-center w-full h-full py-6 gap-3 text-[4rem] text-white md:hidden xl:flex'>
                    <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-auto bg-white rounded-xl border-2 border-red-600   '>
            <div className='w-full h-full p-4 curosr-pointer flex flex-col items-center justify-center md:flex md:flex-row xl:flex-col'>
                <div className='bg-[#a5aafa] w-full flex items-center justify-center rounded-xl'>
                    <Image src={'/images/avatar-10.jpg'} width={200} height={400} className='' />
                </div>
                <div className='text-center w-full h-full py-2  '>
                    <h1 className='text-[2rem] capitalize font-bold py-1  '>macklum Dave</h1>
                    <h2 className='text-[1rem] uppercase font-semibold '>code expert</h2>

                    <div className=' itms-center justify-center w-full h-full py-6 gap-3 text-[4rem] text-white hidden md:flex xl:hidden'>
                        <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                        <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                        <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    </div>
                </div>
                <div className='flex itms-center justify-center w-full h-full py-6 gap-3 text-[4rem] text-white md:hidden xl:flex'>
                    <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-auto bg-white rounded-xl border-2 border-red-600   '>
            <div className='w-full h-full p-4 curosr-pointer flex flex-col items-center justify-center md:flex md:flex-row xl:flex-col'>
                <div className='bg-[#6cdef3] w-full flex items-center justify-center rounded-xl'>
                    <Image src={'/images/avatar-9.jpg'} width={200} height={400} className='' />
                </div>
                <div className='text-center w-full h-full py-2  '>
                    <h1 className='text-[2rem] capitalize font-bold py-1  '>macklum Dave</h1>
                    <h2 className='text-[1rem] uppercase font-semibold '>code expert</h2>

                    <div className=' itms-center justify-center w-full h-full py-6 gap-3 text-[4rem] text-white hidden md:flex xl:hidden'>
                        <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                        <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                        <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    </div>
                </div>
                <div className='flex itms-center justify-center w-full h-full py-6 gap-3 text-[4rem] text-white md:hidden xl:flex'>
                    <BiLogoFacebook  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoTwitter className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                    <BiLogoLinkedin  className='cursor-pointer bg-blue-700 rounded-full p-2 hover:bg-green-500 hover:text-blue-950 duration-200' />
                </div>
            </div>
        </SwiperSlide>
    
  </Swiper>
    </div>
</div>
  )
}

export default Team