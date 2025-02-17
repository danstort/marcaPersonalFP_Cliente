import Cabecera from "../components/cabecera/Cabecera";
import Footer from "../components/pie/Footer";
import '../App.css' ;
import { useState } from 'react';

const Home = (props) => {

    const [idioma, setIdioma] = useState('es');
    
        function cambiarIdioma(idiomaElegido) {
            setIdioma(idiomaElegido);
            //mandarIdioma(idiomaElegido);
        }
    
        function mandarIdioma(idiomaElegido) {
            props.cambiarIdioma(idiomaElegido);
        } 

        console.log(idioma+" Home");
    return (
        <>
            <Cabecera cambiarIdioma={cambiarIdioma}/>
            <h1>Home</h1>
            <Footer />
        </>
    );
}

export default Home;