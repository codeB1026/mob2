import Image from 'next/image'
import React from 'react'
import {FaPlus} from 'react-icons/fa'


const WhyUs = () => {
  return (
    <div className='px-[5rem] flex flex-col w-full  py-12 items-start justify-between md:items-center md:justify-center  lg:text-center xl:grid xl:grid-cols-2 xl:text-start '>
        <div className=''>
            <h2 className='py-6 text-2xl  text-primary text-blue-800 tracking-wide capitalize'>Why us</h2>
            <h1 className='text-4xl uppercase text-blue-950 font-bold pb-6 '>we have over 25+ years in the tech company</h1>
            <p className='pb-6 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod itaque ipsam veritatis.</p>
            <div className='flex flex-col gap-5 capitalize '>
            <div className='group cursor-pointer'>
                <div className=' flex items-center gap-2'>
                    <FaPlus />
                    <h1>dedicated Teams</h1>
                </div>
                <div>
                    <p className=' hidden group-hover:flex duration-500 bg-blue-600 p-4  rounded-xl text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis similique accusamus dolorem soluta fuga quos hic ipsa nihil voluptatum commodi?</p>
                </div>
            </div>
            <div className='group cursor-pointer'>
                <div className=' flex items-center gap-2'>
                    <FaPlus />
                    <h1>dedicated Teams</h1>
                </div>
                <div>
                    <p className=' hidden group-hover:flex duration-300 bg-blue-600 p-4 rounded-xl text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis similique accusamus dolorem soluta fuga quos hic ipsa nihil voluptatum commodi?</p>
                </div>
            </div>
            <div className='group cursor-pointer'>
                <div className=' flex items-center gap-2'>
                    <FaPlus />
                    <h1>dedicated Teams</h1>
                </div>
                <div>
                    <p className=' hidden group-hover:flex duration-300 bg-blue-600 p-4 rounded-xl text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis similique accusamus dolorem soluta fuga quos hic ipsa nihil voluptatum commodi?</p>
                </div>
            </div>
            </div>
        </div>
        <div className='flex justify-center cursor-pointer pt-12 xl:px-5'>
            <Image src={"/images/whyus.jpg"} width={600} height={600} className='rounded-l-[50px] rounded-r-[20px] p-4 border-2 border-y-blue-950 border-x-green-800' />
        </div>
    </div>
  )
}

export default WhyUs