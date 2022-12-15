fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((user) => console.log(user));

/*   const data = {text:'culo'}
const request = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const user = await response.json();
  console.log("with async/await", user);
};

request() */

// Investigar los metodos HTTP
// GET: el metodo GET solicita una representacion de un recurso especifico. las peiciones que usan el metodo GET solo deben recpera datos.
// POST: el metodo POST se utiliza para enviar una entidad a un recurso en especifico, causando a menudo un cambio ene el estado
// PUT: el metodo PUT remplaza todas las representaciones actuales del recurso de destino con la carga util de la peticion
// PATCH: el metodo PATCH es utilizado para aplicar modificaciones parciales a un recurso
// DELETE borra un recurso en especifico

// Hacer una peticion con cada metodo, y hacer un log de la respuesta,
// investigar como hacerlo

const putRequest = async () => {
    const data = { text: "bate" };
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const post = await response.json();

    console.log("with async/await", post);
  }
};

putRequest();

const postRequest = async () => {
    const data = { text: "pelota" };
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {'Content-Type': 'aplication/json'},
    body: JSON.stringify(data),
    })
    if(response.ok) {
        const post = await response.json();

        console.log('cambio el nombre', post);
    }
}

postRequest()

const deleteRequest = async () => {
    // const data = { text: 'guante'};
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'DELETE',
        headers: {'Content-Type': 'aplication/json'},
        // body: JSON.stringify(data),
    })
    if (response.ok) {
      const post = await response.json();
      
      console.log('aun no se lo que hace', post);
    }
}