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
        <>
            <Empresa cambiarIdioma={cambiarIdioma} />
            <h1>Busqueda Proyectos</h1>
            <h2>Prueba: {idiomas[idioma].footer.empresas}</h2>
            <ListaFamiliasProfesionales establecerFamiliaID={establecerFamiliaID}/>
            <ResultadosBusquedaProyectos familiaID={familiaID}/>



        </>
    )
}

export default BusquedaProyectos;