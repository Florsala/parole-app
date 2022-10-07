import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Servicios from './components/Servicios'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Servicios/>
      


      </div>
  )
}

export default App
