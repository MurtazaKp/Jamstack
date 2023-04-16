import React from 'react'

const InputGroup = () => {
  return (
    <div className='flex '>
      <input placeholder='Place your website Url' className='border rounded-full pl-4 max-w-full'></input>
      <a className='bg-primary py-2 px-4 rounded-full -ml-10 text-white'>Request Reports</a>
</div>

   
  )
}

export default InputGroup