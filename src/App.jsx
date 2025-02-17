import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import CentroEducativo from './pages/CentroEducativo'
import Empresa from './pages/Empresa'
import Alumno from './pages/Alumno'
import { Routes, Route } from 'react-router-dom'
import IdiomaContext from './context/IdiomaContext'


function App() {
 

  return (
    <div className="container">

      <IdiomaContext.Provider value="es">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa/>} />
        <Route path="/centroeducativo" element={<CentroEducativo />} />
        <Route path="/alumno" element={<Alumno />} />

      </Routes>
      </IdiomaContext.Provider>
    </div>
      
      
        
       
  )
}

export default App
