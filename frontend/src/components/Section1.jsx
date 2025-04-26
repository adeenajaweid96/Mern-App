import React from 'react'
import col1 from "../assets/Vector (1).png"
import col2 from '../assets/zara-logo-1 1.png'
import col3 from "../assets/prada-logo-1 1.png"
import col4 from "../assets/gucci-logo-1 1.png"
import col5 from "../assets/Group.png"

const Section1 = () => {
  return (
    <div>
          
    <div className='flex justify-evenly py-12  max-w-screen-2xl mx-auto bg-black flex-wrap'>
     
      <div>
        <img src={col1} alt="Versace" />
      </div>
      <div>
        <img src={col2} alt="Zara" />
      </div>
      <div>
        <img src={col3} alt="Prada" />
      </div>
      <div>
        <img src={col4} alt="Gucci" />
      </div>

      <div>
        <img src={col5} alt="Calvin Klein" />
      </div>

      </div>

    </div>
  )
}

export default Section1
