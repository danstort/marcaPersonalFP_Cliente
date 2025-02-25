import useProyectos from "../../hooks/useProyectos";
import ProyectoMinCard from "../proyectoMinCard/ProyectoMinCard";


const ResultadosBusquedaProyectos = (props) => {

    const proyectos = useProyectos();

    
    function mostrarProyectos(proyecto) {
        //La función some() comprueba si al menos un elemento de ciclos cumple con la condición que le pasamos.
        //La función includes() comprueba si el array de FamiliaID
        if (proyecto.ciclos.some(ciclo => props.familiaID.includes(ciclo.familia_id))) {
            return (
                <ProyectoMinCard key={proyecto.id} proyecto={proyecto}/>
            );
        }
        return null;
    }

    return (
        <div className="row ">
            
            {proyectos.proyectos.map(mostrarProyectos)}

        </div>
    );

}

export default ResultadosBusquedaProyectos;