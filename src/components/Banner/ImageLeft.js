import React from 'react'
import Medium from '../Button/medium'

const ImageLeft = ({ heading, description, video, backgroundColor ,textColor }) => {

  // const homeBanner = [
  //   {
  //     heading: "The ecosystem for building digital presence",
  //     image: { src: 'https://github.com/MurtazaKp/Jamstack/blob/main/public/images/banner.png?raw=true', url: "href", altText: "Image" },
  //     button: { buttonText: "Start A Project", target: "_self" },
  //   },
  // ];


  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 ' style={{ backgroundColor }}>
        <div  >
            <h1 className=' text-h1 pt-14 mb-8' style={{color: textColor}}>{heading}</h1>
            <Medium/>
        </div>
        <div className='flex justify-center align-middle p-5 '>
            <img  src={video} alt={video.altText} ></img>  
        </div>
    </div>
  )
}

export default ImageLeft
