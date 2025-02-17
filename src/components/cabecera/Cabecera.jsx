import '../../App.css';
import './Cabecera.css';
import SelectorIdiomas from '../selectoridiomas/SelectorIdiomas';
import imagenLogo from './img/mp-logoNaranja100.png';
import { useState } from 'react';

const Cabecera = (props) => {

    const [idioma, setIdioma] = useState('es');

    function cambiarIdioma(idiomaElegido) {
        setIdioma(idiomaElegido);
        mandarIdioma(idiomaElegido);
    }

    function mandarIdioma(idiomaElegido) {
        props.cambiarIdioma(idiomaElegido);
    } 

    //console.log(idioma);

    return (
        <nav className=" row align-items-center cabeceraFondo">

            <div className="col-4"><img src={imagenLogo} alt="Logo Naranja" className='imgLogoMarcaPersonal' /></div>
            <div className="col-4"><h2>MarcaPersonalFP</h2></div>
            <div className="col-4 text-end"><SelectorIdiomas cambiarIdioma={cambiarIdioma}/></div>

        </nav>
    );

}

export default Cabecera;