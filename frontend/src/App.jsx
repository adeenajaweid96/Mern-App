import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx'
// import Hero from './components/Hero.jsx';
// import Section1 from "./components/Section1.jsx"
import Footer from "./components/Footer.jsx"
import './App.css'
import Home from "./pages/Hero.jsx"
import Signup from './pages/signup';
import Login from './pages/login';
import Contact from './pages/Contact.jsx'



function App() {

  return (
 <>

{/* <Hero/>
<Section1/> */}
<Navbar/>
 <Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/signup' element={<Signup />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/contact' element={<Contact/>}/>
 </Routes>
 <Footer/>

 </>
  )
}

export default App
