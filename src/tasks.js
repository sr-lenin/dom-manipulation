// tarea 3
// crear un funcion con argumentos nombrados, que cree un formulario,
// que le ponga los inputs que reciba por argumento,
// le agregue un boton que diga enviar,
// y que le ponga un event listerner al evento submit,

// Respuesta correcta
// {
// inputs, onSubmit
//}

// { inputs: [inpu21, input1] }

/* const taskForm = document.querySelector('#former')

function createForm({ inputs, onSubmit }) {
    const form = document.createElement('form')
    const button = document.createElement('button')
    button.textContent = 'enviar'
    form.append(...inputs, button)
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        onSubmit()
        console.log('culo');
    })
    return form    
}

const input1 = document.createElement('input')
const input2 = document.createElement('input')
const parametros = { inputs: [input1, input2], onSubmit: () => console.log('hizo click') }
const form = createForm(parametros)


taskForm.prepend(form) */
/* 
function firstFunction({ liElements }) {
  const createUl = document.createElement("ul");
  liElements.forEach((li) => {
    createUl.append(li);
  });
  const createButton = document.createElement("button");
  createButton.addEventListener("click", () => {
      console.log("clicked");
    });
    
    createUl.append(createButton);
  return createUl;
}
const li = document.createElement("li");
li.textContent = "mi li";
const ul = firstFunction({ liElements: [li] });
 */

const lenin = ({liElement}) => {
    const createUl = document.createElement('ul')
    liElement.forEach((li) => {
        createUl.append(li);
    });
    const createButton = document.createElement('button')
    createButton.textContent = 'eliminar'
    createButton.addEventListener('click', () => {
        console.log('hizo click');
    })
    
    createUl.append('createButton')
    return createUl;   
}

    const li = document.createElement('li')
    li.textContent = 'say hi';
    const ul = lenin({liElement: [li]})
// tarea 4
// crear un funcion con argumentos nombrados, que cree un ul,
// que le ponga los li que reciba por argumento,
// le agregue un boton que diga Eliminar,
// y que le ponga un event listerner al evento click del boton,

// Respuesta correcta
// {
// liElements, onClick
//}
// { inputs: [inpu21, input1] }

// Investigar
// Los metodos para recorrer un array y repasar for, for in, for of, while, do while,
