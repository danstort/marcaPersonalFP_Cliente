import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import { useState } from "react";


const ListaFamiliasProfesionales = () => {

    const familiasProfesionales = useFamiliasProfesionales();
    const [familiasSeleccionadas, setFamiliasSeleccionadas] = useState([]);

    function añadirFamilia(familia){
        
        if (!familiasSeleccionadas.includes(familia)) {
            setFamiliasSeleccionadas([...familiasSeleccionadas, familia]);
            console.log([...familiasSeleccionadas, familia]);
        } else {
            setFamiliasSeleccionadas(familiasSeleccionadas.filter(f => f !== familia)); //Aquí filtro para obtener todos los diferentes al valor introducido y reemplazo el array que da filter por el array de familiasSeleccionadas
            
        }
    
    }

    

    


    function obtenerFamiliasProfesionales(familia) {

        const botonSeleccionado = familiasSeleccionadas.includes(familia.nombre);
        return <button style={{ backgroundColor: botonSeleccionado ? "blue" : "initial" }}
        key={familia.id}
        onClick={() => añadirFamilia(familia.nombre)}>{familia.nombre}</button>
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