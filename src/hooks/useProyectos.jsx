import { useState, useEffect } from 'react';
import { getProyectos } from '../services/getProyectos';

const useProyectos = () => {

  const [buscando, setBuscando] = useState(false);

  
  const [proyectos, setProyectos] = useState([]);


  function obtenerProyectos() {

    setBuscando(true);


    getProyectos.then(valor => {

      setProyectos(valor);
      setBuscando(false);
      console.log(valor);

    });

  }


  useEffect(obtenerProyectos, []);

  return { buscando, proyectos };


}

export default useProyectos;
//En construcción