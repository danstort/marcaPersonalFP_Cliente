import '../App.css';
import { getCounts } from '../services/posts/getCounts';
import { useEffect, useState } from 'react';


const Footer = () => {

      // Estado con la lista de post que recuperamos de la REST API
  const [counts, setCounts] = useState({
    numeroEmpresas: 0,
    numeroProyectos: 0,
    numeroAlumnos: 0,
  });


  function obtenerCounts(){

      
      getCounts({tabla: "empresas"}).then(valor => {
          
          setCounts(counts => ({
            ...counts,
            numeroEmpresas: valor.count,
          }));
          console.log(valor);
        });   
        
        getCounts({tabla: "proyectos"}).then(valor => {
          
          setCounts(counts => ({
            ...counts,
            numeroProyectos: valor.count,
          }));
          console.log(valor);
        });

        getCounts({tabla: "users"}).then(valor => {
          
          setCounts(counts => ({
            ...counts,
            numeroAlumnos: valor.count,
          }));
          console.log(valor);
        });
  }

  
  useEffect(obtenerCounts, []);

  // Función encargada de llamar al componente Post con el post
  // que recibe como parámetro implícito de la función map
  
    return (
        <footer className='borde row'>
            <p>Footer</p>
            <h1>{counts.numeroEmpresas}</h1>
            <h1>{counts.numeroProyectos}</h1>
            <h1>{counts.numeroAlumnos}</h1>
   

        </footer>
    );
}

export default Footer;