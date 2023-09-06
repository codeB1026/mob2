import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col items-center justify-center px-[5rem] w-full bg-blue-950 py-10'>
        <div className='grid grid-cols-2 w-full gap-5 lg:grid-cols-4'>
            <div className='flex flex-col items-center justify-center  cursor-pointer '>
                <h1 className='text-[3rem] text-green-400 font-bold text-center'>782</h1>
                <h2 className='text-xl text-white text-primary text-center capitalize'>Worldwide  Customers</h2>
            </div>
            <div className='flex flex-col items-center justify-center  cursor-pointer '>
                <h1 className='text-[3rem] text-green-400 font-bold text-center '>12k</h1>
                <h1 className='text-xl text-white text-primary  text-center capitalize'>Projects Done</h1>
            </div>
            <div className='flex flex-col items-center justify-center  cursor-pointer border-green-600'>
                <h1 className='text-[3rem] text-green-400 font-bold text-center'>6.782</h1>
                <h1 className='text-xl text-white text-primary capitalize text-center'>IT Products</h1>
            </div>
            <div className='flex flex-col items-center justify-center  cursor-pointer border-green-600'>
                <h1 className='text-[3rem] text-green-400 font-bold text-center'>
                    $600K</h1>
                <h1 className='text-xl text-white text-primary text-center capitalize'>Projects Spend</h1>
            </div>
        </div>
    </div>
  )
}

export default Stats