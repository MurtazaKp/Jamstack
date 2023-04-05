import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='grid grid-cols-2 p-10 align-middle'>
        <div  >
            <h1 className=' mt-10 '>The ecosystem for building digital presence</h1>
            <button className='bg-primary rounded-full px-7 py-3 mt-8 text-cust-grey-100 '>Start a Project</button>
        </div>

        <div className='flex justify-center align-middle p-5'>
            <img className=''  src='/images/banner.png'></img>
            
        </div>
    </div>
  )
}

export default Banner
