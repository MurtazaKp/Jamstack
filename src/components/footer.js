import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faFacebookF, faInstagramSquare, faTwitter, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons' 


const Footer = ({ heading, button , backgroundColor ,textColor , iconColor ,servicetext  }) => {
    
  return (
    <>
    <footer className='border-t my-44'>
        <div className='grid grid-cols-12' style={{ backgroundColor }} >
            <div className='col-span-12 sm:col-span-6 lg:col-span-8 sm:p-10 m-5 sm:m-0'>
                <h4 className='text-primary ' style={{color: textColor}} >{heading}</h4>
                <div className='flex gap-4 mt-3'>
                    <div className='text-2xl'>
                    <a href='#'> <FontAwesomeIcon className='' icon={faEnvelope} />  </a>
                    </div>
                 <a href='#'> <FontAwesomeIcon style={{color: iconColor}} className='' icon={faFacebookF} />  </a>
                 <a href='#'> <FontAwesomeIcon style={{color: iconColor}} className='' icon={faTwitter} />  </a>
                 <a href='#'> <FontAwesomeIcon style={{color: iconColor}} className='' icon={faWhatsappSquare} />  </a>
                 <a href='#'> <FontAwesomeIcon style={{color: iconColor}} className='' icon={faInstagramSquare} />  </a> 
                </div>
            </div>
            <div className='col-span-12 sm:col-span-6 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-7  sm:p-10 m-5 sm:m-0  '>
                <ul className='my-10 sm:my-0'>
                    <a href="#"> <li className='font-semibold mb-2' style={{color: servicetext}} >EcommJ</li></a>
                    <a href="#"> <li className='font-semibold mb-2' style={{color: servicetext}} >WebJ</li></a>
                    <a href="#"> <li className='font-semibold mb-2' style={{color: servicetext}} >MobJ</li></a>
                    <a href="#"> <li className='font-semibold mb-2' style={{color: servicetext}} >Other Services</li></a>
                    <a href="#"> <li className='font-semibold mb-2' style={{color: servicetext}} >Pricing</li></a>
                </ul>
                <ul>
                    <a href="#"> <li className='font-semibold mb-2'  style={{color: servicetext}} >FAQ</li></a>
                    <a href="#"> <li className='font-semibold mb-2'  style={{color: servicetext}} >About Us</li></a>
                    <a href="#"> <li className='font-semibold mb-2'  style={{color: servicetext}} >Blog</li></a>
                    <a href="#"> <li className='font-semibold mb-2'  style={{color: servicetext}} >Contact</li></a>
                </ul>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
