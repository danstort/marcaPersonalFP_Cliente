import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";

const ListaFamiliasProfesionales = () => {

    const familiasProfesionales = useFamiliasProfesionales();

    function obtenerFamiliasProfesionales(familia) {

        return <button>{familia.nombre}</button>
    }

    console.log(familiasProfesionales.familiasProfesionales)

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