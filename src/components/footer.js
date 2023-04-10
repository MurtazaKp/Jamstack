import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faFacebookF, faInstagramSquare, faTwitter, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons' 


const Footer = () => {
  return (
    <>
    <footer className='border-t my-44'>
        <div className='grid grid-cols-12'>

           

            <div className='col-span-12 sm:col-span-6 lg:col-span-8 sm:p-10 m-5 sm:m-0'>
                <h4 className='text-primary '>Jamstack+</h4>
             
                <div className='flex gap-4 mt-3'>
                    <div className='text-2xl'>
                    <a href='#'> <FontAwesomeIcon className='' icon={faEnvelope} />  </a>
                    </div>
                
                 <a href='#'> <FontAwesomeIcon className='' icon={faFacebookF} />  </a>
                 <a href='#'> <FontAwesomeIcon className='' icon={faTwitter} />  </a>
                 <a href='#'> <FontAwesomeIcon className='' icon={faWhatsappSquare} />  </a>
                 <a href='#'> <FontAwesomeIcon className='' icon={faInstagramSquare} />  </a>


                 


                  

                    
                </div>
                
            </div>

            <div className='col-span-12 sm:col-span-6 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-7  sm:p-10 m-5 sm:m-0  '>
                <ul className='my-10 sm:my-0'>
                    <a href="#"> <li className='font-semibold mb-2'>EcommJ</li></a>
                    <a href="#"> <li className='font-semibold mb-2'>WebJ</li></a>
                    <a href="#"> <li className='font-semibold mb-2'>MobJ</li></a>
                    <a href="#"> <li className='font-semibold mb-2'>Other Services</li></a>
                    <a href="#"> <li className='font-semibold mb-2'>Pricing</li></a>

                </ul>

                <ul>
                    <a href="#"> <li className='font-semibold mb-2'>FAQ</li></a>
                    <a href="#"> <li className='font-semibold mb-2'>About Us</li></a>
                    <a href="#"> <li className='font-semibold mb-2'>Blog</li></a>
                    <a href="#"> <li className='font-semibold mb-2'>Contact</li></a>

                </ul>

            </div>

        </div>
        
    </footer>
    </>
  )
}

export default Footer
