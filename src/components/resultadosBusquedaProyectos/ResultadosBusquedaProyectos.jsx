import useProyectos from "../../hooks/useProyectos";

const ResultadosBusquedaProyectos = (props) => {

    const proyectos = useProyectos();

    function mostrarProyectos(proyecto) {
        return (
            <div key={proyecto.id}>
                <h1>{proyecto.nombre}</h1>
                {proyecto.ciclos.map(ciclo => (
                    <p key={ciclo.id}>{ciclo.familia_id}</p>
                ))}
            </div>
        );
    }

    return (
        <div className="row">
            <h1>{props.familiaID}</h1>
            {proyectos.proyectos.map(mostrarProyectos)}
        </div>
    );

}

export default ResultadosBusquedaProyectos;