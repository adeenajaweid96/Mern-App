import React , { useState} from 'react'
import { Eye , EyeOff  } from 'lucide-react';


const signup = () => {
    const [showPassword, setShowPassword] = useState(true)
    
  return (
    <div>
      <h1>Create Account</h1>
      <p>Create you account Or Sign Up</p>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder='First Name'/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" placeholder='Last Name'/>
        <label htmlFor="email">Your Email Address</label>
        <input type="email" name="email" id="" placeholder='Email'/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='password'  />
      </div>
    </div>
  )
}

export default signup
