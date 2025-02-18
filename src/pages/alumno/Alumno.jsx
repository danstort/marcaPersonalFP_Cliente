import Cabecera from "../../components/cabecera/Cabecera";
import idiomas from "../../mocks/idiomas-mock";
import IdiomaContext from "../../context/IdiomaContext";
import { useContext } from "react";

const Alumno = (props) => {

    const idioma = useContext(IdiomaContext);

    function cambiarIdioma(idiomaElegido) {
        //setIdioma(idiomaElegido);
        mandarIdioma(idiomaElegido);
    }

    function mandarIdioma(idiomaElegido) {
        props.cambiarIdioma(idiomaElegido);
    }
    return (
        <>
        
        <Cabecera className="borde" cambiarIdioma={cambiarIdioma}/>
        
        <h1>{idiomas[idioma].footer.alumnos}</h1>
        </>
        

        
    )

}

export default Alumno;