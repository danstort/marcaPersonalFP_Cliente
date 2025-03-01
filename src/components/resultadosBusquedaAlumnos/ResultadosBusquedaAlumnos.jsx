import useAlumnos from "../../hooks/useAlumnos";
import AlumnoMinCard from "../alumnoMinCard/AlumnoMinCard";
import { useEffect, useState } from "react";


const ResultadosBusquedaProyectos = (props) => {

    const alumnos = useAlumnos();



    /*     function mostrarProyectos(proyecto) {
            //La función some() comprueba si al menos un elemento de ciclos cumple con la condición que le pasamos.
            //La función includes() comprueba si el array de FamiliaID
    
            if (props.familiaID.length === 0) {
                return (
                    <ProyectoMinCard key={proyecto.id} proyecto={proyecto} />
                );
            }
            else if (proyecto.ciclos.some(ciclo => props.familiaID.includes(ciclo.familia_id))) {
    
                return (
                    <ProyectoMinCard key={proyecto.id} proyecto={proyecto} />
                );
    
    
            }
    
        } */

    function mostrarAlumnos(alumno) {
        //La función some() comprueba si al menos un elemento de ciclos cumple con la condición que le pasamos.
        //La función includes() comprueba si el array de FamiliaID

        if (props.familiaID.length === 0 && props.competenciaID.length === 0) {
            return (
                <AlumnoMinCard key={alumno.id} alumno={alumno} />
            );
        }
        else if (alumno.ciclos.some(ciclo => props.familiaID.includes(ciclo.familia_profesional.id)) && alumno.competencias.some(competencia => props.competenciaID.includes(competencia.id))) {

            return (
                <AlumnoMinCard key={alumno.id} alumno={alumno} />
            );

        }
        else if(alumno.ciclos.some(ciclo => props.familiaID.includes(ciclo.familia_profesional.id)) && props.competenciaID.length === 0){
            return (
                <AlumnoMinCard key={alumno.id} alumno={alumno} />
            );
        }
        else if(alumno.competencias.some(competencia => props.competenciaID.includes(competencia.id)) && props.familiaID.length === 0){
            return (
                <AlumnoMinCard key={alumno.id} alumno={alumno} />
            );
        }

    }




    return (
        <div className="row ">


            {alumnos.alumnos.map(mostrarAlumnos)}
            {props.familiaID.length > 0 && props.competenciaID.length > 0  ? <p>No hay alumnos que cumplan los criterios de búsqueda</p> : null}

        </div>
    );

}

export default ResultadosBusquedaProyectos;