import React from 'react'


const Typography = ({fontWeight}) => {
  console.log({ fontWeight});
  return (
    <>
    <div className='flex flex-col gap-5'>
      <h4 className='text-gray-600'>Font size</h4>
      <div>
        <h1 className={`${"font-"+fontWeight}`} >Heading 1</h1>
        <p className={`${"font-"+fontWeight} text-gray-400 `}>72px Semibold</p>
      </div>

      <div>
        <h2>Heading 2</h2>
        <p className="text-gray-400">64px Semibold</p>
      </div>

      <div>
        <h3>Heading 3</h3>
        <p className="text-gray-400">52px Semibold</p>
        

      </div>

      <div>
        <h4>Heading 4</h4>
        <p className="text-gray-400">40px Regular</p>
      </div>


      <div>
        <h5>Heading 5</h5>
        <p className="text-gray-400">32px Regular</p>
      </div>

      
    <div>
        <p>Body</p>
        <p className="text-gray-400">20px Regular</p>
      </div>
    </div>
<div className="mt-10 flex flex-col gap-5">
  <h4>Font Family</h4>
  <div >
    <p className='text-xl font-neo'><span className='font-semibold font-sans'>Headings:</span> Neo Sans Pro</p>
    <p className='text-2xl font-inter'><span className='font-semibold font-mono'>Body:</span> Inter</p>
  </div>
</div>

    </>


    

  )
}

export default Typography