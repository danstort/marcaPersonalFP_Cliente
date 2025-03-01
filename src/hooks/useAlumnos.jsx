import { useState, useEffect} from 'react';
import { getAlumnos } from '../services/getAlumnos';

const useAlumnos = () => {

  const [buscando, setBuscando] = useState(false);

  
  const [alumnos, setAlumnos] = useState([]);


  function obtenerAlumnos() {

    setBuscando(true);


    getAlumnos().then(valor => {

      setAlumnos(valor);
      setBuscando(false);
      console.log(valor);

    });

  }


  useEffect(obtenerAlumnos, []);

  return { buscando, alumnos };


}

export default useAlumnos;
