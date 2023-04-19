import React from 'react'

const TextCenter = ({ heading, button , backgroundColor ,textColor , buttonColor , buttonTextColor }) => {

  return (
    <div className='flex flex-col items-center bg-cust-grey-100 py-16 '
      style={{ backgroundColor }}
    >
       <h2 style={{color: textColor}} className='text-center mb-7'>{heading}</h2> 
       <button  className='py-4 px-10 rounded-full bg-primary text-white' style={{ backgroundColor: buttonColor, color: buttonTextColor }} >{button}</button>
    </div>
  )
}

export default TextCenter