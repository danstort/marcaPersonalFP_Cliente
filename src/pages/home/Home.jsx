import Cabecera from "../../components/cabecera/Cabecera";
import Footer from "../../components/pie/Footer";
import '../../App.css';
import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import imagenEmpresa from './img/empresa.jpg';
import imagenCentroEducativo from './img/centroEducativo.jpg';
import imagenAlumno from './img/alumno.jpg';

const Home = (props) => {

    const [idioma, setIdioma] = useState();

    function cambiarIdioma(idiomaElegido) {
        setIdioma(idioma);
        mandarIdioma(idiomaElegido);
    }

    function mandarIdioma(idiomaElegido) {
        props.cambiarIdioma(idiomaElegido);
    }

    //console.log(idioma+" Home");
    return (
        <>
            <Cabecera cambiarIdioma={cambiarIdioma} />
            <div className="row fondoHome">
                
                <div className="col-4">
                    <Link to="/empresa"
                    className="active">
                    <img src={imagenEmpresa} alt="Empresa" className='imagenesHome' />
                </Link>
                </div>

                <div className="col-4">
                    <Link to="/centroeducativo"
                    className="active">
                    <img src={imagenCentroEducativo} alt="Centro Educativo" className='imagenesHome' />
                </Link>
                </div>

                <div className="col-4">
                    <Link to="/alumno"
                    className="active">
                    <img src={imagenAlumno} alt="Alumno" className='imagenesHome' />
                </Link>
                </div>


            </div>
            <Footer />
        </>


    );
}

export default Home;