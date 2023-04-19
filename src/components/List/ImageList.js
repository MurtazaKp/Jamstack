import React from 'react'


const ImageList = () => {
  return (
    <div>
      <ul className='flex flex-col gap-6'>
        <li className='flex gap-3 items-center'>
            <img width={30} height={30} src='https://github.com/MurtazaKp/Jamstack/blob/main/public/images/Circle%20(2).png?raw=true'></img>
            <p>High Performance</p>
        </li>
        <li className='flex gap-3 items-center'>
            <img width={30} height={30} src='https://github.com/MurtazaKp/Jamstack/blob/main/public/images/Rectangle%2077.png?raw=true'></img>
            <p>Lead Driven web Presense</p>
        </li>

        <li className='flex gap-3 items-center'>
            <img width={30} height={30} src='https://github.com/MurtazaKp/Jamstack/blob/main/public/images/pentagon.png?raw=true'></img>
            <p>Engineered Uniquely</p>
        </li>
      </ul>
    </div>
  )
}

export default ImageList
