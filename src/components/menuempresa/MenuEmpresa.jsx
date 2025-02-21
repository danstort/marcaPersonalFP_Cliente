import React from 'react';
import { Link } from 'react-router-dom';

const MenuEmpresa = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/empresa" className="active">Empresa</Link></li>
                <li><Link to="/empresa/proyectos" className="active">Proyectos</Link></li>
                <li><Link to="/empresa/alumnos" className="active">Alumnos</Link></li>
            </ul>
        </nav>
    );
    }
export default MenuEmpresa;