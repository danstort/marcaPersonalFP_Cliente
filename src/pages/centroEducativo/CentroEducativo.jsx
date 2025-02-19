import Cabecera from "../../components/cabecera/Cabecera";
import IdiomaContext from "../../context/IdiomaContext";
import { useContext } from "react";
import idiomas from "../../mocks/idiomas-mock";

const CentroEducativo = (props) => {

    const idioma = useContext(IdiomaContext);

    function cambiarIdioma(idiomaElegido) {
        //setIdioma(idiomaElegido);
        mandarIdioma(idiomaElegido);
    }

    function mandarIdioma(idiomaElegido) {
        props.cambiarIdioma(idiomaElegido);
    }

    return(
        <>
            <Cabecera cambiarIdioma={cambiarIdioma}/>
            <h1>{idiomas[idioma].centroeducativo}</h1>
        </>
    )
}

   

export default CentroEducativo;