import React from 'react'
import pay1  from "../assets/Badge (4).png"
import pay2 from "../assets/Badge (3).png"
import pay3 from "../assets/Badge.png"
import pay4 from "../assets/Badge (1).png"
import pay5 from "../assets/Badge (2).png"
import logo from "../assets/SHOP.CO.png"
import { Instagram ,Facebook ,  Github ,  X} from 'lucide-react';



const Footer = () => {
  return (
    <div className='max-w-screen-2xl mx-auto bg-gray-200'>
      <div className='flex py-40'>
        <div>
<img src={logo} alt="Logo" className='h-8' />
<p className='text-gray-600 py-8'>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
<div className='text-black rounded-full flex gap-6'>
<X className='text-black bg-white rounded-full text-bold p-1' />
<Facebook  className='text-black bg-white rounded-full text-bold p-1' />
<Instagram  className='text-black bg-white rounded-full text-bold p-1' />
<Github  className='text-black bg-white rounded-full text-bold p-1' />
</div>

      </div>
      <div className='flex flex-col
      '>
        <h1>COMPANY</h1>
      </div>
      <div>
        <h1>HELP</h1>
      </div>
      <div> 
        <h1>FAQ</h1>
         </div>
      <div>
        <h1>RESOURCES</h1> </div>
      </div>



      <div className=' flex justify-between px-22 py-10 flex-wrap'>
        <p className='text-gray-500'>Shop.co @2023-2025, All Rights Reserved</p>
        <div className='flex'>
            <img src={pay1} alt="visa" />
            <img src={pay2} alt="visa" />
            <img src={pay3} alt="paypal" />
            <img src={pay4} alt="Apple pay" />
            <img src={pay5} alt="Google pay" />
        </div>

      </div>
    </div>
  )
}

export default Footer
