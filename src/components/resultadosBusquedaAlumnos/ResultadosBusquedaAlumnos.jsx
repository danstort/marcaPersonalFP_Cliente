import useAlumnos from "../../hooks/useAlumnos";
import ProyectoMinCard from "../proyectoMinCard/ProyectoMinCard";
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



    return (
        <div className="row ">

            
            {alumnos.alumnos.map(alumno => ( <h1>{alumno.name}</h1>))}


        </div>
    );

}

export default ResultadosBusquedaProyectos;