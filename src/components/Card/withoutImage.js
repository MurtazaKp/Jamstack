import React from 'react'

const WithoutImage = () => {
  return (
   <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
    <div class="block max-w-sm p-6  border rounded-2xl bg-accent1  ">
    <h3 class="  font-bold tracking-tight  dark:text-white mb-6 text-white">WebJ</h3>
    <p class="font-normal text-white mb-20">The platform provides quick, secured, durable and easily manageable digital presence that is uniquely tailored with popular tech stack by decoupling frontend and backend responsibilities.</p>
    <div className='flex justify-end items-center'>
    <p className='text-green-500 relative z-30 -m-10'> Know More</p>
        <div className='w-28 h-28 rounded-full bg-white'></div>
        
    </div>
</div>

<div class="block max-w-sm p-6  border rounded-2xl bg-accent1  ">
    <h3 class="  font-bold tracking-tight  dark:text-white mb-6 text-white">MobJ</h3>
    <p class="font-normal text-white mb-20">The platform delivers fast, easily managed CMS, eCommerce vitals for businesses that are uniquely tailored with popular tech stack by decoupling frontend and backend responsibilities.</p>
    <div className='flex justify-end items-center'>
    <p className='text-green-500 relative z-30 -m-10'> Know More</p>
        <div className='w-28 h-28 diamond bg-white'></div>
        
    </div>
</div>


<div class="block max-w-sm p-6  border rounded-2xl bg-accent1  ">
    <h3 class="  font-bold tracking-tight  dark:text-white mb-6 text-white">EcommJ</h3>
    <p class="font-normal text-white mb-7 ">The mobJ is innovation by Jamstack+ to build the collaborative mobile apps. The architecture is flexible enough to give you freedom to manage your app content seamlessly. It provides the app that can run on any platform and on any screen smoothly.</p>
    <div className='flex justify-end items-center'>
    <p className='text-green-500 relative z-30 -m-10 '> Know More</p>
        <div className='w-28 h-28 pentagon bg-white'></div>
        
    </div>
</div>
    </div>




   </>
  )
}

export default WithoutImage