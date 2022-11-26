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


// agregar un eventlitener al formulario para el evento submit 
// validar que el input task y el taskdate no esten vacios si lo estan lanzar un error con el mensaje formulario invalido
// si tienen valores crear un elemento li ponerle de texto el valor del input task 
// cambiar el estilo al li color ponerlo azul
// agrregar el li al ul


const addEventToForm = document.querySelector('#task-form')
addEventToForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const getInputTask = event.target.children.task;

    const getInputDate = event.target.children.taskdate;

    if (getInputTask.value === "" || getInputDate.value === "" ) {
        throw new Error(' formulario invalido ')
    }
    console.log(' el valor de input task es ' + getInputTask.value);
    console.log(' el valor de date es ' + getInputDate.value);

})
const callUl = document.querySelector('#todo-list')
function alfin () {
const createLi = document.createElement('li')
createLi.textContent = 'el valor del input task'
createLi.style.color = ' red'
callUl.prepend(createLi)
}
alfin()













// const eventform = document.querySelector('#task-form input[name="task"]')

// eventform.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const getInputTask = event.target.children.task;
//     const getInputDate = event.target.children.taskdate;
//     if(getInputTask.value === "" || getInputDate.value === ""){
//         throw new Error('formulario invalido')
//     }
//     //  console.log("el valor de input task es: " + getInputTask.value);
//     //  console.log("el valor de input taskdate es: " + getInputDate.value);
    
// })
