import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages//home/Home'
import CentroEducativo from './pages/centroEducativo/CentroEducativo'
import Empresa from './pages/empresa/Empresa'
import Alumno from './pages/alumno/Alumno'
import { Routes, Route } from 'react-router-dom'
import IdiomaContext from './context/IdiomaContext'
import SelectorIdiomas from './components/selectoridiomas/SelectorIdiomas'


function App() {
 
  const [idioma, setIdioma] = useState('es');

    function cambiarIdioma(idiomaElegido) {
        setIdioma(idiomaElegido);
        
    }
    //console.log("App: "+idioma);

  return (
    <div className="container-fluid">

      <IdiomaContext.Provider value={idioma}>
      <Routes>
        <Route path="/" element={<Home cambiarIdioma={cambiarIdioma}/>} />
        <Route path="/empresa" element={<Empresa cambiarIdioma={cambiarIdioma}/>} />
        <Route path="/centroeducativo" element={<CentroEducativo cambiarIdioma={cambiarIdioma} />} />
        <Route path="/alumno" element={<Alumno cambiarIdioma={cambiarIdioma}/>} />
        <Route path="/empresa/alumno" element={<h1>En construcción</h1>} />

      </Routes>
      </IdiomaContext.Provider>
    </div>
      
      
        
       
  )
}

export default App
