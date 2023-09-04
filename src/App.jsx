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
function App() {

  return (
  <>
    <Header/>
    <Main />
    <Test />
    <About />
    <Footer />
  </>
  )
}

export default App
