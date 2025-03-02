import React, { useState } from 'react'
import { useContext } from 'react'
import IdiomaContext from '../../../context/IdiomaContext'  
import idiomas from '../../../mocks/idiomas-mock'
import Empresa from '../Empresa'
import ListaFamiliasProfesionales from '../../../components/listaFamiliasProfesionales/ListaFamiliasProfesionales'
import ResultadosBusquedaProyectos from '../../../components/resultadosBusquedaProyectos/ResultadosBusquedaProyectos'

const BusquedaProyectos = (props) => {

    const [idiomaElegido, setIdioma] = useState();
    const [familiaID, setFamiliaID] = useState([]);

    function cambiarIdioma(idiomaElegido) {
        setIdioma(idiomaElegido);
        mandarIdioma(idiomaElegido);
    }

    function mandarIdioma(idiomaElegido) {
        props.cambiarIdioma(idiomaElegido);
    }

    function establecerFamiliaID(familiaID) {
        setFamiliaID(familiaID);
        
    }

    

    //console.log(familiaID);


    const idioma = useContext(IdiomaContext);
    return (
        <div className='row'>
            <Empresa cambiarIdioma={cambiarIdioma} />
            <div className="col-12 text-start p-3" style={{backgroundColor: '#f8f9fb'}}>
                <h5 style={{fontWeight: 'bold'}}>Búsqueda Proyectos</h5>
            </div>
            
            
            <ListaFamiliasProfesionales establecerFamiliaID={establecerFamiliaID}/>
            <ResultadosBusquedaProyectos familiaID={familiaID}/>



        </div>
    )
}

export default BusquedaProyectos;