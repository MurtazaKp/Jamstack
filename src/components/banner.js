import React from 'react'

const Banner = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 p-10 align-middle'>
        <div  >
            <h1 className=' mt-10 text-h4 lg:text-h1  '>The ecosystem for building digital presence</h1>
            <button className='bg-primary rounded-full px-7 py-3 mt-8 text-cust-grey-100 text-xl '>Start a Project</button>
        </div>

        <div className='flex justify-center align-middle p-5'>
            <img className=''  src='/images/banner.png'></img>
            
        </div>
    </div>
  )
}

export default Banner
