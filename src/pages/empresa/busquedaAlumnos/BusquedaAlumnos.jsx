import Empresa from "../Empresa";
import React, { useState } from 'react'
import ListaFamiliasProfesionales from '../../../components/listaFamiliasProfesionales/ListaFamiliasProfesionales'
import ListaCompetencias from '../../../components/listaCompetencias/ListaCompetencias'
import ResultadosBusquedaAlumnos from '../../../components/resultadosBusquedaAlumnos/ResultadosBusquedaAlumnos'


const BusquedaProyectos = (props) => {

    const [idiomaElegido, setIdioma] = useState();
    const [familiaID, setFamiliaID] = useState([]);
    const [competenciaID, setCompetenciaID] = useState([]);

    function cambiarIdioma(idiomaElegido) {
        setIdioma(idiomaElegido);
        mandarIdioma(idiomaElegido);
    }
    function mandarIdioma(idiomaElegido) {
        props.cambiarIdioma(idiomaElegido);
    }

    function establecerFamiliaID(familiaID) {
        setFamiliaID(familiaID);
        //console.log(familiaID);
    }

    function establecerCompetenciaID(competenciaID) {
        setCompetenciaID(competenciaID);
        console.log(competenciaID);
    }

    return (
        <div className='row'>
            <Empresa cambiarIdioma={cambiarIdioma} />

            <div className="col-12 text-start">
                <h3>Busca a tus alumnos</h3>
            </div>
            
            <ListaCompetencias establecerCompetenciaID={establecerCompetenciaID}/>
            <ListaFamiliasProfesionales establecerFamiliaID={establecerFamiliaID}/>

            <ResultadosBusquedaAlumnos idiomaElegido={idiomaElegido} familiaID={familiaID} competenciaID={competenciaID} />



        </div>
    )
}
export default BusquedaProyectos;
