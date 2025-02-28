const ProyectoMinCard = (props) => {
  return (
    <div className="col-12 col-md-4 col-lg-4 mb-4">
  <div className="card p-3 shadow-sm" style={{ borderRadius: '15px' }}>
    <div className="d-flex align-items-start">
      {/* Imagen a la izquierda */}
      <div className="flex-shrink-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
          alt="Imagen representativa"
          className="img-fluid"
          style={{ width: '90px', height: '90px', borderRadius: '10px', objectFit: 'cover' }}
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="flex-grow-1 ms-3">
        <h5 className="mb-1">{props.proyecto.nombre}</h5>
        <p className="small text-muted mb-1"> <strong>ALUMNOS: </strong> {props.proyecto.participantes.map(participante => {return participante.name+" | "})}</p>
        <p className="mb-2"><strong>Tutor:</strong> {props.proyecto.docente_id} </p>
        <p className="mb-0"><strong>Ciclos:</strong> {props.proyecto.ciclos.map( ciclo => {
            return ciclo.codCiclo+" | ";
        })} </p>
      </div>
    </div>
  </div>
</div>

  );
}

export default ProyectoMinCard;