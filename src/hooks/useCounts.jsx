import { useState, useEffect} from 'react';
import { getCounts } from '../services/getCounts';

const useCounts = () => {

const [buscando, setBuscando] = useState(false);

const [counts, setCounts] = useState({
    numeroEmpresas: 0,
    numeroProyectos: 0,
    numeroAlumnos: 0,
  });


  function obtenerCounts(){

        setBuscando(true);
        
      
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
          setBuscando(false);
          
          
        });

        
        
        
  }

  
  useEffect(obtenerCounts, []);

    return {buscando, counts};

}

export default useCounts;