import React from 'react'

function Discount() {
  return (
    <div className='w-full h-auto bg-blue-800 flex flex-col items-center justify-center py-4 xl:flex-row'>
        <div className=' flex  flex-col items-center px-[5rem] gap-5 xl:flex-row xl:py-12'>
            <div>
                <h1 className=' text-xl text-primary text-center text-green-300 uppercase'>service discount up to 30% for any projects</h1>
            </div>
            <div>
                <button className='py-2 px-4 text-sm bg-transparent border-2 text-center border-green-600 text-white hover:bg-green-600 hover:text-blue-950 uppercase font-bold duration-200'>Start project Now</button>
            </div>
        </div>
    </div>
  )
}

export default Discount