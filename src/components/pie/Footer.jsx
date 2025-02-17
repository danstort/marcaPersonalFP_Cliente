import '../../App.css';
import { getCounts } from '../../services/posts/getCounts';
import { useContext, useEffect, useState } from 'react';
import useCounts from '../../hooks/useCounts';
import idiomas from '../../mocks/idiomas-mock.js';
import IdiomaContext from '../../context/IdiomaContext';



const Footer = () => {

  const counts = useCounts();

  const idioma = useContext(IdiomaContext);
  
    return (
        <footer className='borde row'>
            <p>Footer</p>
           {counts.buscando ? <p>Buscando...</p> :
            <p>Hay {counts.counts.numeroEmpresas} {idiomas[idioma].footer.empresas}, {counts.counts.numeroProyectos} proyectos y {counts.counts.numeroAlumnos} alumnos</p>}
   

        </footer>
    );
}

export default Footer;