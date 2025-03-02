import '../../App.css';
import './Footer.css';
import { useContext, useEffect, useState } from 'react';
import useCounts from '../../hooks/useCounts';
import idiomas from '../../mocks/idiomas-mock.js';
import IdiomaContext from '../../context/IdiomaContext';
import facebook from '../../assets/redesSociales/facebook.svg';
import twitter from '../../assets/redesSociales/twitter.svg';
import instagram from '../../assets/redesSociales/instagram.svg';
import tiktok from '../../assets/redesSociales/tiktok.svg';
import youtube from '../../assets/redesSociales/youtube.svg';





const Footer = () => {

    const counts = useCounts();


    const idioma = useContext(IdiomaContext);

    console.log(counts.buscando);

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
                        <h3 className='numeroContador'>{counts.buscando ? <p>..cargando</p> : counts.counts.numeroAlumnos}</h3>
                    </div>
                </div>


            </div>

            <div className='mt-3 row '>
                <h4 className='h4Footer'>CIFP Carlos III</h4>
                <p className='textoFooter'>C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>

                <div className='col-12 d-flex justify-content-center p-2'>
                    <a href='https://www.facebook.com/cifpcarlos3' target='_blank' className='iconoFooter'><img src={facebook} className='logoRedes m-1' alt="" /></a>
                    <a href='https://twitter.com/cifpcarlos3' target='_blank' className='iconoFooter'><img src={twitter} className='logoRedes m-1' alt="" /></a>
                    <a href='https://www.instagram.com/cifpcarlos3/' target='_blank' className='iconoFooter'><img src={instagram} className='logoRedes m-1' alt="" /></a>
                    <a href='https://www.tiktok.com/@cifpcarlos3' target='_blank' className='iconoFooter'><img src={tiktok} className='logoRedes m-1' alt="" /></a>
                    <a href='https://www.youtube.com/c/cifpcarlosiiicartagena' target='_blank' className='iconoFooter'><img src={youtube} className='logoRedes m-1' alt="" /></a>
                </div>
            </div>

            <div className="row">
                <div className="col-12 ">
                    <a href="https://cifpcarlos3.es/es">
                    
                    <p className='textoFooter'>
                        <strong>Marca Personal FP</strong> | Diseño Web CFGS Desarrollo de Aplicaciones Web © 2024

                    </p>
                    
                    </a>
                    
                </div>
            </div>



        </footer>
    );
}

export default Footer;