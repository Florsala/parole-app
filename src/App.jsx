import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Servicios from './components/Servicios'
import Equipo from './components/Equipo'
import Contacto from './components/Contacto'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Servicios/>
      <Equipo/>
      <Contacto/>
      


      </div>
  )
}

export default App
