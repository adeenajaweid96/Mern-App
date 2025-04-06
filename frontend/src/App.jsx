import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx'
import Hero from "./components/hero.jsx"
// import Footer from "./components/footer.jsx"
import './App.css'
import Signup from './pages/signup.jsx';

function App() {

  return (
 <>
 <Navbar/>
 <Signup/>
 {/* <Routes>
  <Route path='/signup' element="{Signup}"/>
 </Routes> */}
 </>
  )
}

export default App
