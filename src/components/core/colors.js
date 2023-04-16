import React from 'react'


const Colors = () => {
  return (
    <>
    <h5 className='text-3xl font-bold mb-5'>Color Pallete</h5>
    <div className='flex gap-9 '>
    <div className='flex flex-col items-center w-1/12 gap-1'>
        <div  className="bg-primary rounded-full p-5 w-2.5 h-2.5 text-xs border-2 border-black "></div>
        <span className='text-xs text-gray-400'>#e002a2</span>
        <span>Primary</span>
    </div>

    <div className='flex flex-col items-center w-1/12 gap-1 '>
        <div  className="bg-accent1 rounded-full p-5 w-2.5 h-2.5 text-xs border-2 border-black "></div>
        <span className=' text-xs text-gray-400'>#4767F6</span>
        <span>Accent1</span>
    </div>
       
    <div className='flex flex-col items-center w-1/12 gap-1 '>
        <div  className="bg-accent2 rounded-full p-5 w-2.5 h-2.5 text-xs border-2 border-black "></div>
        <span className=' text-xs text-gray-400'>#ff5223</span>
        <span>Accent2</span>
    </div>

    <div className='flex flex-col items-center w-1/12 gap-1 '>
        <div  className="bg-white rounded-full p-5 w-2.5 h-2.5 text-xs border-2 border-black "></div>
        <span className=' text-xs text-gray-400'>#ffffff</span>
        <span>White</span>
    </div>


    <div className='flex flex-col items-center w-1/12 gap-1 '>
        <div  className="bg-cust-grey-100 rounded-full p-5 w-2.5 h-2.5 text-xs border-2 border-black "></div>
        <span className=' text-xs text-gray-400'>#f1f2f6</span>
        <span>Light grey</span>
    </div>


    <div className='flex flex-col items-center w-1/12 gap-1 '>
        <div  className="bg-cust-grey-200 rounded-full p-5 w-2.5 h-2.5 text-xs border-2 border-black "></div>
        <span className=' text-xs text-gray-400'>#d1d5E5</span>
        <span>Dark Grey</span>
    </div>
       
    </div>

    </>
  )
}

export default Colors