import React, { useState } from 'react'
import { useContext } from 'react'
import IdiomaContext from '../../../context/IdiomaContext'  
import idiomas from '../../../mocks/idiomas-mock'
import Empresa from '../Empresa'
import MenuEmpresa from '../../../components/menuempresa/MenuEmpresa'

const BusquedaProyectos = (props) => {

    const [idiomaElegido, setIdioma] = useState();

    function cambiarIdioma(idiomaElegido) {
        setIdioma(idiomaElegido);
        mandarIdioma(idiomaElegido);
    }

    function mandarIdioma(idiomaElegido) {
        props.cambiarIdioma(idiomaElegido);
    }


    const idioma = useContext(IdiomaContext);
    return (
        <>
            <Empresa cambiarIdioma={cambiarIdioma} />
            <h1>Busqueda Proyectos</h1>
            <MenuEmpresa />
            <h2>Prueba: {idiomas[idioma].footer.empresas}</h2>
        </>
    )
}

export default BusquedaProyectos;