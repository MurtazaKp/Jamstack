import React from 'react'
import Medium from '../Button/medium'

const ImageBottom = ({ heading, description, video, backgroundColor ,textColor }) => {

  // const priceBaneer = [
  //   {
  //     title: "Let’s boost your business with powerful ecosystem by Jamstack+.",
  //     image: { src: 'https://github.com/MurtazaKp/Jamstack/blob/main/public/images/ImageBottom.png?raw=true', altText: "image" },
  //     button: { buttontext: "Start A Project", target: "_self" },
  //     card: [
  //       {
  //         description: "Our team has hands on on the modern and trendy tools",
  //         image: { src: "image", altText: "image" },
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className='grid grid-cols-1'  style={{ backgroundColor }} >
        <div className='flex flex-col items-center ' >
            <h1 className=' text-h1 pt-14 mb-14 text-center w-3/4' style={{color: textColor}} >{heading}</h1>
            <Medium/>
            <img className='mt-14'  src={video} alt={video.altText}></img>
        </div>
    </div>
  )
}

export default ImageBottom
