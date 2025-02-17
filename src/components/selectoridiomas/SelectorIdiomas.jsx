import banderaEspañola from './img/banderaEspañola.svg';
import banderaInglesa from './img/banderaBritanica.svg';
import './SelectorIdiomas.css';
import { useState } from 'react';

const SelectorIdiomas = (props) => {

    const [idioma, setIdioma] = useState('es');

    const cambiarIdioma = (event) => {
        setIdioma(event.currentTarget.value);
        props.cambiarIdioma(event.currentTarget.value);
    }
    //console.log(idioma);
    return (
        <>

            <button className="botonSelectorIdiomas" value="es" onClick={cambiarIdioma}><img src={banderaEspañola} alt="" className='bandera' /></button>
            <button className="botonSelectorIdiomas" value="en" onClick={cambiarIdioma}><img src={banderaInglesa} alt="" className='bandera' /></button>

        </>
    )


}

export default SelectorIdiomas;