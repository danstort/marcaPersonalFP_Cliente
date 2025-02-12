import '../App.css';
import { getAllPosts } from '../services/posts/getAllPosts';
import { useEffect, useState } from 'react';
import Post from './Post';

const Footer = () => {

      // Estado con la lista de post que recuperamos de la REST API
  const [numeroEmpresas, setNumeroEmpresas] = useState({});


  function obtenerPosts(){

      
      getAllPosts().then(posts => {

          
          setNumeroEmpresas(posts);
          console.log(posts);


        });                    
  }

  
  useEffect(obtenerPosts, []);

  // Función encargada de llamar al componente Post con el post
  // que recibe como parámetro implícito de la función map
  function muestraPost(post) {  

    return <Post  post={post}></Post>;
  }
    return (
        <footer className='borde row'>
            <p>Footer</p>
            <Post  post={numeroEmpresas.count}></Post>;
   

        </footer>
    );
}

export default Footer;