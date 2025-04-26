import React from 'react'
import  section from '../assets/hero.png'


const Hero = () => {
  return (
    <>
    <div className='bg-gray-200 pb-20 flex max-w-screen-2xl mx-auto'>
      <div className='flex flex-col mx-16'>
        <h1 className='text-black  font-extrabold text-6xl pt-16 ml-5'>FIND CLOTHES<br/> THAT MATCHES<br/> YOUR STYLE</h1>
        <p className='text-gray-500 text-[18px] py-8'>Browse through our diverse range of meticulously crafted garments, designed
         to bring out your individuality and cater to your sense of style.</p>
        <button className='bg-black text-white rounded-full p-2 w-42'>Shop Now</button>


      </div>
      <div className='flex flex-col w-full'>
        <img src={section} alt="hero-section" className='w-full h-full' />
      </div>
      
    </div>


    </>
  )
}

export default Hero
