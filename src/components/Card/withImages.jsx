import React from 'react'
import { faArrowAltCircleRight,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const WithImage = () => {
  return (
    <>
      
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3 flex">
        <div class=" border-2 border-gray-200 border-opacity-60  rounded-2xl">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl" src="https://github.com/MurtazaKp/Jamstack/blob/main/public/images/Blog1.png?raw=true" alt="blog"/>
          <div class="p-4">
            <h4 className='mb-3' >Termgrid</h4>
            <p class="leading-relaxed mb-5">Branding a whole new category of debt management.</p>
            
            <a className='text-primary text-xl flex items-center gap-8 pb-5'>Read more <FontAwesomeIcon icon={faArrowRight}/></a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3 ">
      <div class=" border-2 border-gray-200 border-opacity-60  rounded-2xl">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl" src="https://github.com/MurtazaKp/Jamstack/blob/main/public/images/Blog2.png?raw=true" alt="blog"/>
          <div class="p-4">
            <h4 className='mb-3' >Crisp </h4>
            <p class="leading-relaxed mb-5">Designing a new mobile experience for the all-in-one messaging platform.</p>
            
            <a className='text-primary text-xl flex items-center gap-8 mb-5'>Read more <FontAwesomeIcon icon={faArrowRight}/></a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
      <div class=" border-2 border-gray-200 border-opacity-60  rounded-2xl">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl" src="https://github.com/MurtazaKp/Jamstack/blob/main/public/images/Blog3.png?raw=true" alt="blog"/>
          <div class="p-4">
            <h4 className='mb-3' >Ternary</h4>
            <p class="leading-relaxed mb-5">Creating a visual identity and product for FinOps cloud innovator.</p>
            
            <a className='text-primary text-xl flex items-center gap-8 pb-5'>Read more <FontAwesomeIcon icon={faArrowRight}/></a>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
    
  )
}

export default WithImage