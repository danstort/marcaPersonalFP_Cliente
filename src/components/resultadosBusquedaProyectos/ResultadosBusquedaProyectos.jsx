import useProyectos from "../../hooks/useProyectos";
import ProyectoMinCard from "../proyectoMinCard/ProyectoMinCard";
import { useState } from "react";


const ResultadosBusquedaProyectos = (props) => {

    const proyectos = useProyectos();
    

    
    function mostrarProyectos(proyecto) {
        //La función some() comprueba si al menos un elemento de ciclos cumple con la condición que le pasamos.
        //La función includes() comprueba si el array de FamiliaID

        if (props.familiaID.length === 0) {
            return (
                <ProyectoMinCard key={proyecto.id} proyecto={proyecto}/>
            );
        }
        else if (proyecto.ciclos.some(ciclo => props.familiaID.includes(ciclo.familia_id))) {
            
            return (
                <ProyectoMinCard key={proyecto.id} proyecto={proyecto}/>
            );
            
            
        } 
        
        
        
    }

    return (
        <div className="row ">
            
            {proyectos.proyectos.map(mostrarProyectos)} 
            {props.familiaID.length === 0 ? (
                <p>No hay proyectos que mostrar</p>
            ) : null}
          

        </div>
    );

}

export default ResultadosBusquedaProyectos;