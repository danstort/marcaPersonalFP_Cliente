import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import { useState, useEffect } from "react";


const ListaFamiliasProfesionales = (props) => {

    const familiasProfesionales = useFamiliasProfesionales();
    const [familiasSeleccionadas, setFamiliasSeleccionadas] = useState([]);
    const [familiaID, setFamiliaID] = useState([]);

    function añadirFamilia(familia, id) {

        if (!familiasSeleccionadas.includes(familia)) {
            setFamiliasSeleccionadas([...familiasSeleccionadas, familia]);
            setFamiliaID([...familiaID, id]);

            //console.log([...familiasSeleccionadas, familia]);
            //console.log([...familiaID, id]);
        } else {
            setFamiliasSeleccionadas(familiasSeleccionadas.filter(f => f !== familia)); //Aquí filtro para obtener todos los diferentes al valor introducido y reemplazo el array que da filter por el array de familiasSeleccionadas

            setFamiliaID(familiaID.filter(f => f !== id));

        }

    }


    useEffect(() => {
        // Esta función se ejecutará cada vez que familiaID cambie
        props.establecerFamiliaID(familiaID);
    }, [familiaID]); // Escucha cambios en familiaID




    function obtenerFamiliasProfesionales(familia) {

        const botonSeleccionado = familiasSeleccionadas.includes(familia.nombre);
        return <button style={{ backgroundColor: botonSeleccionado ? "blue" : "initial" }}
            key={familia.id}
            onClick={() => añadirFamilia(familia.nombre, familia.id)}>{familia.nombre}</button>
        //Para llamar la función en onClick se hace con una arrow function para que no se ejecute en el momento de renderizar
    }



    return (
        <div>
            <h1>Lista de familias profesionales</h1>
            <ul>
                {familiasProfesionales.familiasProfesionales.map(obtenerFamiliasProfesionales)}
            </ul>
        </div>
    );

}

export default ListaFamiliasProfesionales;