export function getFamiliasProfesionales () {

    // Usamos fetch para recuperar los post de la REST API. Puesto que hacemos
    // una petición al servidor y esta puede tardar un tiempo en resolverse usaremos
    // una promesa, la respuesta de la REST API es los que devolvemos
    return fetch(`http://marcapersonalfp.test/api/v1/familias_profesionales`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      return data;
    });
}