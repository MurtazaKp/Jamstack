import React from 'react'

const TextLeft = ({ heading, button , backgroundColor ,textColor , buttonColor , buttonTextColor }) => {

  const jamStatic = [
    {
      heading:
        "Jam stack is the way to sustainable success and Jamstack+ is your gateway.",
      button: { buttontext: "Start A Project", target: "_self" },
    },
  ];

  return (
    <div className='flex flex-col items-start bg-cust-grey-100 py-16 ps-10 '
    style={{ backgroundColor }}
    >
       <h2 style={{color: textColor}} className='text-left mb-7'>{heading}</h2> 
       <button className='py-4 px-10 rounded-full bg-primary text-white' style={{ backgroundColor: buttonColor, color: buttonTextColor }} >{button}</button>
    </div>
  )
}

export default TextLeft