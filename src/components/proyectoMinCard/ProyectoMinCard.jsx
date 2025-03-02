const ProyectoMinCard = (props) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4 ">
      <div className="card p-3 shadow-sm fondoCard" style={{ borderRadius: '15px' }}>
        <div className="d-flex align-items-start">
          {/* Imagen a la izquierda */}
          <div className="flex-shrink-0" style={{ flex: '1 1 33%' }}>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
              alt="Imagen representativa"
              className="img-fluid"
              style={{ width: '100%', height: 'auto', borderRadius: '10px', objectFit: 'cover' }}
            />
          </div>

          {/* Contenido de la tarjeta */}
          <div className="flex-grow-1 ms-3" style={{ flex: '1 1 67%' }}>
            <h5 className="mb-1 text-start">{props.proyecto.nombre}</h5>
            <div className="text-start fondoInteriorCard">
            <p className="small text-muted mb-1"><strong>ALUMNOS: </strong>{props.proyecto.participantes.map(participante => participante.name).join(' | ')}</p>
            <p className="mb-2"><strong>Tutor:</strong> {props.proyecto.docente_id}</p>
            <p className="mb-0" title={props.proyecto.ciclos.map(ciclo => ciclo.nombre).join(' | ')}><strong>Ciclos:</strong> {props.proyecto.ciclos.map(ciclo => ciclo.codCiclo).join(' | ')}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProyectoMinCard;