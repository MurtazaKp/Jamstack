import React from 'react'


const Multilist = () => {
  return (
    <div className='flex p-3 gap-14'>
      <ul className='list-disc  flex flex-col gap-2' >
        <li>Design</li>
        <li>Development</li>
        <li>Integration</li>
        <li>Payments</li>
      </ul>

      <ul className='list-disc flex flex-col gap-2'>
        <li>Shiping</li>
        <li>Branding</li>
        <li>SMS</li>
        <li>Email</li>
      </ul>


      <ul className='list-disc flex flex-col gap-2'>
        <li>Strapie</li>
        <li>Testing Envoirment</li>
        <li>Pages upto 10</li>
        <li>1 year Support</li>
      </ul>
    </div>
  )
}

export default Multilist
