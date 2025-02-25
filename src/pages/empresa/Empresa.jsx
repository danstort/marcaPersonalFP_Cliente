import Cabecera from "../../components/cabecera/Cabecera";
import IdiomaContext from "../../context/IdiomaContext";
import { useContext } from "react";
import idiomas from "../../mocks/idiomas-mock";
import MenuEmpresa from "../../components/menuempresa/MenuEmpresa";



const Empresa = (props) => {

    const idioma = useContext(IdiomaContext);

    function cambiarIdioma(idiomaElegido) {
        //setIdioma(idiomaElegido);
        mandarIdioma(idiomaElegido);
    }

    function mandarIdioma(idiomaElegido) {
        props.cambiarIdioma(idiomaElegido);
    }

    return(
        <div className="row sin">
            <Cabecera cambiarIdioma={cambiarIdioma}/>
            <MenuEmpresa/>
            
            
        </div>
    )
}

export default Empresa;