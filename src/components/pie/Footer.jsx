import '../../App.css';
import { getCounts } from '../../services/posts/getCounts';
import { useEffect, useState } from 'react';
import useCounts from '../../hooks/useCounts';



const Footer = () => {

  const counts = useCounts();
  
    return (
        <footer className='borde row'>
            <p>Footer</p>
           {counts.buscando ? <p>Buscando...</p> :
            <p>Hay {counts.counts.numeroEmpresas} empresas, {counts.counts.numeroProyectos} proyectos y {counts.counts.numeroAlumnos} alumnos</p>}
   

        </footer>
    );
}

export default Footer;