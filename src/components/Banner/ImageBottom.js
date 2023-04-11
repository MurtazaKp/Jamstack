import React from 'react'
import Medium from '../Button/medium'

const Banner = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <div className='flex flex-col items-center ' >
            <h1 className=' text-h1 pt-14 mb-8 text-center '>Let’s boost your business with powerful ecosystem by Jamstack+. </h1>
            <Medium/>
        </div>

        <div className='flex justify-center align-middle p-5 '>
            <img className=''  src='https://github.com/MurtazaKp/Jamstack/blob/main/public/images/banner.png?raw=true'></img>
            
        </div>
    </div>
  )
}

export default Banner
