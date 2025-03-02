import React from 'react';
import { Link } from 'react-router-dom';
import './MenuEmpresa.css';
import IdiomaContext from '../../context/IdiomaContext';
import idiomas from '../../mocks/idiomas-mock';
import { useContext } from 'react';

const MenuEmpresa = () => {
    const idioma=useContext(IdiomaContext);
    return (
        <nav className='menuEmpresa'>
            <ul>
                <li className='empresaLink'><Link to="/empresa" className="active">{idiomas[idioma].footer.empresas}</Link></li>
                <li className='restoLinks'><Link to="/empresa/proyectos" className="active"> {idiomas[idioma].footer.proyectos} </Link></li>
                <li className='restoLinks'><Link to="/empresa/alumnos" className="active"> {idiomas[idioma].footer.alumnos} </Link></li>
            </ul>
        </nav>
    );
    }
export default MenuEmpresa;