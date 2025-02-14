import '../../App.css';
import './Cabecera.css';
import imagenLogo from './img/mp-logoNaranja100.png';

const Cabecera = () => {

return (
    <header className="borde row">

        <h1 className='col-12'>Cabecera</h1>
        <img src={imagenLogo} alt="Logo Naranja" className='imgLogoMarcaPersonal'/>
    </header>
    
);

}

export default Cabecera;