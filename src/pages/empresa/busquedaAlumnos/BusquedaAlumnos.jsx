import Empresa from "../Empresa";
import React, { useState } from 'react'


const BusquedaProyectos = (props) => {

    const [idiomaElegido, setIdioma] = useState();

    function cambiarIdioma(idiomaElegido) {
        setIdioma(idiomaElegido);
        mandarIdioma(idiomaElegido);
    }
    function mandarIdioma(idiomaElegido) {
        props.cambiarIdioma(idiomaElegido);
    }

    return (
        <div className='row'>
            <Empresa cambiarIdioma={cambiarIdioma} />
            



        </div>
    )
}
export default BusquedaProyectos;
