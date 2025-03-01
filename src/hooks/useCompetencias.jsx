import { useState, useEffect } from 'react';
import { getCompetencias } from '../services/getCompetencias';

const useCompetencias = () => {

  const [buscando, setBuscando] = useState(false);

  
  const [competencias, setCompetencias] = useState([]);


  function obtenerCompetencias() {

    setBuscando(true);


    getCompetencias().then(valor => {

      setCompetencias(valor);
      setBuscando(false);
      console.log(valor);

    });

  }


  useEffect(obtenerCompetencias, []);

  return { buscando, competencias };


}

export default useCompetencias;
