import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './components/Main'
import Test from './components/Test'
import About from './components/Abour'
import BookingPage from './components/BookingPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'
import ConfirmationPage from './components/ConfirmationPage'
import ComingSoon from './components/ComingSoon'

function App() {
 

  return (
  <>
      <Nav />
      
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/Confirm" element={<ConfirmationPage />} />
        <Route path = "/About" element ={<ComingSoon />} />
        <Route path = "/Login" element ={<ComingSoon />} />
        <Route path = "/Menu" element ={<ComingSoon />} />
        <Route path = "/Order" element ={<ComingSoon />} />



        {/* Other routes */}
      </Routes>
   
  
   
    <Footer />
  </>
  )
}

export default App
