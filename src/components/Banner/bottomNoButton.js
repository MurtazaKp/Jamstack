import React from 'react'

// const BottomNoButton = () => {

//   const jamSTackBanner = [ 
//     {
//       heading: "What is JAM Stack?",
//       description:
//         "Modern architecture gives the approach of building everything on the web from apps to websites based on Javascript, ApIs and Markup(JAM).",
//       video: { src: 'https://github.com/MurtazaKp/Jamstack/blob/main/public/images/Jamstac.png?raw=true', altText: "video" },
//     },
//   ];
//   return (
    
//     <div className='grid grid-cols-1  '>
//         <div className='flex flex-col items-center ' >
//             <h1 className=' text-h1 pt-14 mb-14 text-center w-3/4 '>{jamSTackBanner[0].heading}</h1>
//             <p className='text-center w-2/3'>{jamSTackBanner[0].description}</p>
//             <img className='mt-14'  src={jamSTackBanner[0].video.src} alt={jamSTackBanner[0].video.altText} ></img>
//         </div>
//     </div>
//   )
// }

const BottomNoButtonImageLeft = ({ heading, description, video , backgroundColor ,textColor , descriptionText }) => {
  return (
    <div className='grid grid-cols-1' style={{ backgroundColor }}>
      <div className='flex flex-col items-center'>
        <h1 className='text-h1 pt-14 mb-14 text-center w-3/4' style={{color: textColor}} >{heading}</h1>
        <p className='text-center w-2/3' style={{color: descriptionText}} >{description}</p>
        <img className='mt-14' src={video} alt={video.altText}></img>
      </div>
    </div>
  );
};

export default BottomNoButtonImageLeft