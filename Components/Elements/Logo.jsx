import React from 'react'

const Logo = () => {
  return (
    <div>
        <div className='flex gap-1  text-4xl items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-[2rem]  text-white">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
            <h1 className='font-primary tracking-widest text-white'>MOB</h1>
        </div>
    </div>
  )
}

export default Logo