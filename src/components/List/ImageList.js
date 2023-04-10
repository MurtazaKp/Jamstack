import React from 'react'


const ImageList = () => {
  return (
    <div>
      <ul className='flex flex-col gap-3'>
        <li className='flex gap-3 items-center'>
            <img width={30} height={30} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ubvopu8G1YqZrIdhBhF8RGDov5nMOjNIvnqAp7Y&s'></img>
            <p>High Performance</p>
        </li>
        <li className='flex gap-3 items-center'>
            <img width={30} height={30} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQe6H4xPIl_7qt9z5Jk856ydfJ6rLt5hgNHdHmSE&s'></img>
            <p>Lead Driven web Presense</p>
        </li>

        <li className='flex gap-3 items-center'>
            <img width={30} height={30} src='https://www.pngkit.com/png/full/300-3007125_orange-pentagon-stefan-rger-multimedia-knowledge-red-flag.png'></img>
            <p>Engineered Uniquely</p>
        </li>
      </ul>
    </div>
  )
}

export default ImageList
