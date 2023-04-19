import React from 'react'
import ImageList from './List/ImageList'

const WebProblems = () => {
  return (
    <div className='grid grid-col-1 lg:grid-cols-2 bg-accent1'>
        <div className='bg-accent1 text-white'>
            <h2 className=' lg:p-11 lg:pl-28 sm:p-10'>Jamstack+ , the leading brand that provides start to end solutions to all web problems.</h2>
        </div>

        <div className='  bg-cust-grey-100 sm:p-10  lg:p-11 lg:pl-20 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl'>
            <h4 className='mb-14'>Jamstack+ , the leading brand that provides start to end solutions to all web problems.</h4>
            <ImageList />
        </div>

        
    </div>

    
  )
}

export default WebProblems