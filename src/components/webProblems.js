import React from 'react'
import ImageList from './List/ImageList'

const WebProblems = () => {
  return (
    <div className='grid grid-col-1 lg:grid-cols-2 bg-accent1'>
        <div className='bg-accent1 text-white'>
            <h2 className=' p-11 pl-28'>Jamstack+ , the leading brand that provides start to end solutions to all web problems.</h2>
        </div>

        <div className='  bg-cust-grey-100  p-11 pl-20 rounded-l-3xl'>
            <h4 className=''>Jamstack+ , the leading brand that provides start to end solutions to all web problems.</h4>
            <ImageList />
        </div>

        
    </div>

    
  )
}

export default WebProblems