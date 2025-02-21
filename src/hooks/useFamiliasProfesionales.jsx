import { useState, useEffect } from 'react';
import { getFamiliasProfesionales } from '../services/getFamiliasProfesionales';

const useFamiliasProfesionales = () => {

  const [buscando, setBuscando] = useState(false);

  const [familiasProfesionales, setFamiliasProfesionales] = useState([]);


  function obtenerCounts() {

    setBuscando(true);


    getFamiliasProfesionales().then(valor => {

      setFamiliasProfesionales(valor);
      setBuscando(false);
      console.log(valor);

    });

  }


  useEffect(obtenerCounts, []);

  return { buscando, familiasProfesionales };


}

export default useFamiliasProfesionales