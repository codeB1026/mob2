"use client"

import React from 'react'
import Image from 'next/image';
import { AiFillCustomerService, AiFillStar } from 'react-icons/ai'

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Testimonal() {
  return (
    <div className='w-full h-screen px-[5rem] bg-blue-600'>
        <h1 className='text-2xl text-blue-200 text-center font-bold uppercase pt-12 '> testimonial</h1>
        <h1 className='text-4xl text-white text-center font-extrabold capitalize pt-12 '>our succefull clients</h1>

        <div className='py-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        className="mySwiper"
      >
        <SwiperSlide className='w-full h-full bg-white  rounded-xl text-center '>
            <div className='w-full h-full p-4 curosr-pointer'>
              <div className='flex items-center justify-center'>
                <AiFillCustomerService className='text-[4rem] text-blue-950 py-2'  />
              </div>
              <p className='text-sm text-center text-blue-800 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum, enim itaque perspiciatis cum hic error corrupti similique ducimus maxime optio eius quo esse dicta earum autem voluptate consequatur ex! Voluptatem error veritatis vitae tenetur! Labore vitae temporibus id tempore.</p>
              <div className='flex items-center justify-center w-full text-green-700 gap-2'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <h1 className='text-green-800 text-[1.5rem] font-bold py-4'>Larual Mecry</h1>
                <div className='flex items-center justify-center pb-6 '>
                  <Image src={'/images/avatar-8.jpg'} width={80} height={80} className='rounded-full border-green-400 border-2 ' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-white  rounded-xl text-center '>
            <div className='w-full h-full p-4 curosr-pointer'>
              <div className='flex items-center justify-center'>
                <AiFillCustomerService className='text-[4rem] text-blue-950 py-2'  />
              </div>
              <p className='text-sm text-center text-blue-800 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum, enim itaque perspiciatis cum hic error corrupti similique ducimus maxime optio eius quo esse dicta earum autem voluptate consequatur ex! Voluptatem error veritatis vitae tenetur! Labore vitae temporibus id tempore.</p>
              <div className='flex items-center justify-center w-full text-green-700 gap-2'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <h1 className='text-green-800 text-[1.5rem] font-bold py-4'>Larual Mecry</h1>
                <div className='flex items-center justify-center pb-6 '>
                  <Image src={'/images/avatar-8.jpg'} width={80} height={80} className='rounded-full border-green-400 border-2 ' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-white  rounded-xl text-center '>
            <div className='w-full h-full p-4 curosr-pointer'>
              <div className='flex items-center justify-center'>
                <AiFillCustomerService className='text-[4rem] text-blue-950 py-2'  />
              </div>
              <p className='text-sm text-center text-blue-800 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum, enim itaque perspiciatis cum hic error corrupti similique ducimus maxime optio eius quo esse dicta earum autem voluptate consequatur ex! Voluptatem error veritatis vitae tenetur! Labore vitae temporibus id tempore.</p>
              <div className='flex items-center justify-center w-full text-green-700 gap-2'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <h1 className='text-green-800 text-[1.5rem] font-bold py-4'>Larual Mecry</h1>
                <div className='flex items-center justify-center pb-6 '>
                  <Image src={'/images/avatar-8.jpg'} width={80} height={80} className='rounded-full border-green-400 border-2 ' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-white rounded-xl text-center '>
            <div className='w-full h-full p-4 curosr-pointer'>
              <div className='flex items-center justify-center'>
                <AiFillCustomerService className='text-[4rem] text-blue-950 py-2'  />
              </div>
              <p className='text-sm text-center text-blue-800 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum, enim itaque perspiciatis cum hic error corrupti similique ducimus maxime optio eius quo esse dicta earum autem voluptate consequatur ex! Voluptatem error veritatis vitae tenetur! Labore vitae temporibus id tempore.</p>
              <div className='flex items-center justify-center w-full text-green-700 gap-2'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <h1 className='text-green-800 text-[1.5rem] font-bold py-4'>Larual Mecry</h1>
                <div className='flex items-center justify-center pb-6 '>
                  <Image src={'/images/avatar-8.jpg'} width={80} height={80} className='rounded-full border-green-400 border-2 ' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-white rounded-xl text-center '>
            <div className='w-full h-full p-4 curosr-pointer'>
              <div className='flex items-center justify-center'>
                <AiFillCustomerService className='text-[4rem] text-blue-950 py-2'  />
              </div>
              <p className='text-sm text-center text-blue-800 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum, enim itaque perspiciatis cum hic error corrupti similique ducimus maxime optio eius quo esse dicta earum autem voluptate consequatur ex! Voluptatem error veritatis vitae tenetur! Labore vitae temporibus id tempore.</p>
              <div className='flex items-center justify-center w-full text-green-700 gap-2'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <h1 className='text-green-800 text-[1.5rem] font-bold py-4'>Larual Mecry</h1>
                <div className='flex items-center justify-center pb-6 '>
                  <Image src={'/images/avatar-8.jpg'} width={80} height={80} className='rounded-full border-green-400 border-2 ' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-white rounded-xl text-center '>
            <div className='w-full h-full p-4 curosr-pointer'>
              <div className='flex items-center justify-center'>
                <AiFillCustomerService className='text-[4rem] text-blue-950 py-2'  />
              </div>
              <p className='text-sm text-center text-blue-800 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum, enim itaque perspiciatis cum hic error corrupti similique ducimus maxime optio eius quo esse dicta earum autem voluptate consequatur ex! Voluptatem error veritatis vitae tenetur! Labore vitae temporibus id tempore.</p>
              <div className='flex items-center justify-center w-full text-green-700 gap-2'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <h1 className='text-green-800 text-[1.5rem] font-bold py-4'>Larual Mecry</h1>
                <div className='flex items-center justify-center pb-6 '>
                  <Image src={'/images/avatar-8.jpg'} width={80} height={80} className='rounded-full border-green-400 border-2 ' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-white rounded-xl text-center '>
            <div className='w-full h-full p-4 curosr-pointer'>
              <div className='flex items-center justify-center'>
                <AiFillCustomerService className='text-[4rem] text-blue-950 py-2'  />
              </div>
              <p className='text-sm text-center text-blue-800 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum, enim itaque perspiciatis cum hic error corrupti similique ducimus maxime optio eius quo esse dicta earum autem voluptate consequatur ex! Voluptatem error veritatis vitae tenetur! Labore vitae temporibus id tempore.</p>
              <div className='flex items-center justify-center w-full text-green-700 gap-2'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <h1 className='text-green-800 text-[1.5rem] font-bold py-4'>Larual Mecry</h1>
                <div className='flex items-center justify-center pb-6 '>
                  <Image src={'/images/avatar-8.jpg'} width={80} height={80} className='rounded-full border-green-400 border-2 ' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-white rounded-xl text-center '>
            <div className='w-full h-full p-4 curosr-pointer'>
              <div className='flex items-center justify-center'>
                <AiFillCustomerService className='text-[4rem] text-blue-950 py-2'  />
              </div>
              <p className='text-sm text-center text-blue-800 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum, enim itaque perspiciatis cum hic error corrupti similique ducimus maxime optio eius quo esse dicta earum autem voluptate consequatur ex! Voluptatem error veritatis vitae tenetur! Labore vitae temporibus id tempore.</p>
              <div className='flex items-center justify-center w-full text-green-700 gap-2'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <h1 className='text-green-800 text-[1.5rem] font-bold py-4'>Larual Mecry</h1>
                <div className='flex items-center justify-center pb-6 '>
                  <Image src={'/images/avatar-8.jpg'} width={80} height={80} className='rounded-full border-green-400 border-2 ' />
                </div>
            </div>
        </SwiperSlide>
        

        
      </Swiper>
        </div>





        <div>
        
        </div> 


    </div>
    
  )
}

export default Testimonal