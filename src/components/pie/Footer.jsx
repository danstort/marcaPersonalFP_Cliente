import '../../App.css';
import './Footer.css';
import { getCounts } from '../../services/posts/getCounts';
import { useContext, useEffect, useState } from 'react';
import useCounts from '../../hooks/useCounts';
import idiomas from '../../mocks/idiomas-mock.js';
import IdiomaContext from '../../context/IdiomaContext';



const Footer = () => {

  const counts = useCounts();

  const idioma = useContext(IdiomaContext);
  
    return (
        <footer className='borde row fondoFooter'>
            <div className='col-6 offset-3 fondoContador'>
                <div className='row'>
                    <div className='col-4'>
                        <p className='textoContador'>{idiomas[idioma].footer.empresas}</p>
                        <h3 className='numeroContador'>{counts.counts.numeroEmpresas}</h3>
                        </div>
                    <div className='col-4'>
                        <p className='textoContador'>{idiomas[idioma].footer.proyectos}</p>
                        <h3 className='numeroContador'>{counts.counts.numeroProyectos}</h3>

                    </div>
                    <div className='col-4'>
                        <p className='textoContador'>{idiomas[idioma].footer.alumnos}</p>
                        <h3 className='numeroContador'>{counts.counts.numeroAlumnos}</h3>
                    </div>
                </div>
                
                
            </div>
            
           <div className='row '>
                    <h1>CIFP Carlos III</h1>
                    <p>C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>
            </div>

        </footer>
    );
}

export default Footer;