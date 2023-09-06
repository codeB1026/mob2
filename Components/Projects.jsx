import React from 'react'
import Image from 'next/image'

function Projects() {
  return (
    <div className='flex flex-col-reverse items-center py-8 px-[5rem] lg:grid lg:grid-cols-2 relative lg:gap-5 xl:gap-2 2xl:gap-0 '>
          <div className='flex items-center cursor-pointer z-20'>
            <Image src={"/images/whyus.jpg"} width={600} height={600} className='rounded-l-[50px] rounded-r-[20px] p-4 border-2 border-y-blue-950 border-x-green-800' />
        </div>
        <div className='flex flex-col items-center text-center justify-center z-20 2xl:items-start 2xl:text-start'>
            <h1 className='uppercase text-blue-600 text-2xl font-bold'>projects</h1>
            <h1 className='capitalize text-blue-950 text-4xl font-bold py-6'>our projects</h1>
            <p className='text-md capitalize py-2 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus et dolor earum sit, dolorum quia sapiente esse cum distinctio quas.</p>
            <p className='text-md capitalize py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro tempore eius fuga sit! Temporibus.</p>
            <div className='py-8'>
              <button className='py-2 px-6 bg-blue-400 text-blue-950 capitalize rounded-lg hover:bg-blue-800 duration-300 hover:text-blue-300'>recent projects</button>
            </div>

        </div>

        <div className='absolute top-0 left-0 z-10'>
            <Image src={'/images/decor1.png'} width={200} height={200} className='opacity-80'  />
        </div>
    </div>
  )
}

export default Projects



