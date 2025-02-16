import banderaEspañola from './img/banderaEspañola.svg';
import banderaInglesa from './img/banderaBritanica.svg';

const SelectorIdiomas = () => {

    return (
        <>
        
        <button value="es"><img src={banderaEspañola} alt="" /></button>
        <button value="en"><img src={banderaInglesa} alt="" /></button>
        
        </>
    )
        

}

export default SelectorIdiomas;