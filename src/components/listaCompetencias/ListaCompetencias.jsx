import useCompetencias from "../../hooks/useCompetencias";
import { useState, useEffect } from "react";


const ListaCompetencias = (props) => {

    const competencias = useCompetencias();
    const [competenciasSeleccionadas, setCompetenciasSeleccionadas] = useState([]);
    const [competenciaID, setCompetenciaID] = useState([]);

    function añadirCompetencia(competencia, id) {

        if (!competenciasSeleccionadas.includes(competencia)) {
            setCompetenciasSeleccionadas([...competenciasSeleccionadas, competencia]);
            setCompetenciaID([...competenciaID, id]);

            //console.log([...familiasSeleccionadas, familia]);
            //console.log([...familiaID, id]);
        } else {
            setCompetenciasSeleccionadas(competenciasSeleccionadas.filter(f => f !== competencia)); //Aquí filtro para obtener todos los diferentes al valor introducido y reemplazo el array que da filter por el array de familiasSeleccionadas

            setCompetenciaID(competenciaID.filter(f => f !== id));

        }

    }


    useEffect(() => {
        // Esta función se ejecutará cada vez que familiaID cambie
        props.establecerCompetenciaID(competenciaID);
    }, [competenciaID]); // Escucha cambios en familiaID




    function obtenerCompetencias(competencia) {

        const botonSeleccionado = competenciasSeleccionadas.includes(competencia.nombre);
        return <button className="botonFiltro m-1" style={{ backgroundColor: botonSeleccionado ? "blue" : "#d6d6d6", color: botonSeleccionado ? "white" : "black" }}
            key={competencia.id}
            onClick={() => añadirCompetencia(competencia.nombre, competencia.id)}>{competencia.nombre}</button>
        //Para llamar la función en onClick se hace con una arrow function para que no se ejecute en el momento de renderizar
    }



    return (
        <div className="row sin pt-4 ">
            <div className="col-12 text-start ">
                <p>Filtra por competencias</p>
            </div>
            
            <ul className="text-start">
                {competencias.competencias.map(obtenerCompetencias)}
            </ul>
        </div>
    );

}

export default ListaCompetencias;