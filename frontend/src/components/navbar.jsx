import React, { useState} from 'react'
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { UserRound , X} from 'lucide-react';
import { Link } from 'react-router-dom';



import logo from "../assets/SHOP.CO.png"


const Navbar = () => {
    const [showBanner , setShowBanner ] = useState(true);
const handleClose=()=>{
    setShowBanner(false);   
}
  return (
   
    <div>

{/*---------------- signup notification------------------ */}
{showBanner && (
<div className='bg-black p-4 flex justify-center max-w-screen-2xl mx-auto md:justify-center '>
<p className='text-white md:text-center flex-1 sm:text-center'>Sign up and get 20% off on your first order <a href="" className='underline'> Sign Up Now</a></p>
<X className='text-white cursor-pointer shrink-0' onClick={handleClose}/>
</div>
)
}

      {/* --------------navbar--------------- */}
      <nav className='bg-white p-6  flex justify-around max-w-screen-2xl mx-auto'>
        <img src={logo} alt="logo" className='' />
        <ul className='flex gap-5 text-black font-medium text-lg pt-2'>
            <li><a href="#">Home</a></li>
            <li><a href="">Products</a></li>
            <li><Link to="/contact"> Contact</Link></li>
            <li><a href="">On Sale</a></li>
        </ul>
        <div className='bg-gray-100 flex gap-2 rounded-full w-[35rem] p-2.5'>
        <Search className='text-gray-500'/>
        <input type="search" name="search products" id="" placeholder='Search for products...' className='focus:outline-0'/>
        </div>

        <div className='flex gap-5 font-medium pt-2'>

        <ShoppingCart />
        {/* <UserRound/> */}
       <Link to="/signup"><UserRound/></Link> 
</div>
      </nav>
      <div>
      
      </div>
    </div>
    
  )
}

export default Navbar
