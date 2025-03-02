import React from "react";
import avatar from "./img/avatar.svg";

const AlumnoMinCard = ({ alumno }) => {


  return (
    <div className="col-12 col-md-6 col-lg-3 ">
      <div className="card p-3 shadow-sm fondoCard m-1" style={{ borderRadius: "15px" }}>
        <div className=" align-items-start">

          <div className="row">
            <div className="col-3 sin" >
              <img
                src={avatar}
                alt={`Avatar de ${alumno.nombre}`}
                className="img-fluid"
                style={{ width: "100%", height: "auto", borderRadius: "10px", objectFit: "cover" }}
              />
            </div>

            {/* Contenido de la tarjeta */}
            <div className="col-9 sin p-1 fondoInteriorCard">

              <h5 className="mb-1 text-start">{alumno.name}</h5>

             
              <div className="row sin mb-2">


                {alumno.idiomas.map((idioma, index) => (
                  <div key={index} className="col-6 sin text-start">
                    { <img
                        src={"https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"}
                        alt={idioma.native_name}
                        title={idioma.native_name}
                        style={{ width: "20px", height: "15px", marginRight: "5px" }}
                      /> }
                    <p className="sin">{idioma.nivel}</p>
                    <p
                      title={idioma.certificado ? "Certificado" : "Sin certificar"}
                      className="sin "
                    >
                      {idioma.certificado ? "C" : "SC"}
                    </p>
                  </div>
                ))}

                {/* Perfiles */}
                <div className="mb-2 text-start sin">
                  <p className="mb-1"><strong>Perfiles:</strong></p>
                  {/* Add profile content here */}
                </div>

                {/* Ciclos */}
                <div className="text-start sin mb-2">
                  <p className="mb-1"><strong>Ciclos:</strong> {alumno.ciclos.map((ciclo, index) => (
                    <span key={index} title={ciclo.nombre} className="me-2">
                      {ciclo.codCiclo} |
                    </span>
                  ))}</p>
                </div>

              </div>


            </div>
          </div >
          <div className="row m-2">
            <p className="text-start">{alumno.sobre_mi}</p>
          </div>
          
        </div>
      </div>
    </div>

  );
};

export default AlumnoMinCard;
