/* const eventform = document.querySelector('#task-form')
eventform.addEventListener('submit', (event) => {
    event.preventDefault()
    // event.stopPropagation()

    const inputs = event.target.children
    console.log(inputs.task.value);
})

const button = document.querySelector('#buttonn')
butonn.addEventListener('click', (event) => {
    console.log('hizo click');
})

const input = document.querySelector('input[name="task"]')
input.addEventListener('input', (writeEvent) => {
    console.log(writeEvent.target.value);
})

const addEventToForm = document.querySelector('#task-form')
addEventToForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const getInputTask = event.target.children.task;
    // const getInputTask = addEventToForm.children.task;
    
    const getInputDate = event.target.children.taskdate;
    // const getInputDate = addEventToForm.children.taskdate;

    if (getInputTask.value === "" || getInputDate.value === "") {
        throw new Error(" formulario invalido")
    }
    console.log("el valor del input task es " + getInputTask.value);
    console.log("el valor del input date es " + getInputDate.value);

})
*/

// tarea 1
// agregar un eventlitener al formulario para el evento submit
// validar que el input task y el taskdate no esten vacios si lo estan lanzar un error con el mensaje formulario invalido
// si tienen valores crear un elemento li ponerle de texto el valor del input task
// cambiar el estilo al li color ponerlo azul
// agrregar el li al ul

const addEventToForm = document.querySelector("#task-form");
const callUl = document.querySelector("#todo-list");

addEventToForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const getInputTask = event.target.children.task;
    const getInputDate = event.target.children.taskdate;

    if (getInputTask.value === "" || getInputDate.value === "") {
        throw new Error(" formulario invalido ");
    }
    
    const today = new Date().toISOString().split("T")[0];
    if (getInputDate.value >= today) {
        editList(getInputTask.value, "blue");
        return;
    }

    editList(getInputTask.value);
    
});

function editList(value, color = "red") {
    const createLi = document.createElement("li");
    createLi.textContent = value;
    createLi.style.color = color;
   
    const editButton = createButton('editar', undefined, () => console.log('me hicieron click editar')) // se guarda lo que retorna la funcion
    const deleteButton = createButtonTest({ value: 'eliminar', onClick: () => console.log('me hicien click eliminar') })
    
    createLi.append(editButton)
    createLi.append(deleteButton)
    
    callUl.prepend(createLi);
}

// tarea 2
// crear una funcion que cree un boton con el texto que se le pase en el primer argumento, y le ponga el color que se le pase en el segundo argumento, si no se le pasa el segundo argumento que sea azul.
// cambiar la funcion editList para que use la funcion que creaste para crear dos botones y agregarlo al li, un boton con el texto editar y otro con el texto eliminar


// NOTA: la funcion debe retornar el boton creado osea usar `return`



function createButton(value, color = "blue", onClick) {
    const button = document.createElement("button");
    button.textContent = value;
    button.style.color = color;
    button.onclick = (e) => onClick(e)
    return button
}



function createButtonTest({ value, color = "blue", onClick }) {
    // const value = props.value
    // const color = props.color
    // const onClick = props.onClick

    const button = document.createElement("button");
    button.textContent = value;
    button.style.color = color;
    button.addEventListener('click', (e) => onClick(e)) 
    return button
}

