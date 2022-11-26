const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-form input[name="task"]')
const todos = document.querySelector('#todo-list')


// tarea 1
function firstTask() {
    const buttonElement = document.createElement("button")
    buttonElement.type = 'submit'
    taskForm.appendChild(buttonElement)
}
firstTask()
// tarea 2
function seconTask() {
    const title = document.createElement('h2')
    title.textContent = 'Task Form'
    taskForm.before(title)
}
seconTask()

// tarea 3
function thirdTask() {
    const title = document.createElement('h2')
    title.textContent = 'Todo List'
    title.style.color = 'blue'
    todos.before(title)
}
thirdTask()

// tarea 4
function fourthTask() {
    const inputElement = document.createElement('input')
    inputElement.type = 'date'
    inputElement.value = '2022-11-23'
    // inputElement.value = new Date().toISOString().split('T')[0]
    taskInput.after(inputElement)
}
fourthTask()

// tarea 5
function fifthTask() {
    // Esto funcionaba porque el navegador crear una variable global con el id del elemento
    // const removeLi = ('li')
    // list.remove()
    const toLi = document.querySelector('#todo-list > li')
    toLi.remove()
}
fifthTask()

// tarea 6
function sixthTask() {
    const createLi = document.createElement('li')
    createLi.textContent = 'Primera Tarea'
    todos.prepend(createLi)
}
sixthTask()

// tarea 7
function seventhTask() {
    // const createClass = ('ul')
    // todos.classList.toggle('todo-list')
    todos.classList.add('todo-list')
}
seventhTask()

// tarea 8
const eighthTask =() => {
    const getbutton = document.querySelector('#butonn')
    getbutton.type = 'button'
}
eighthTask()

// tarea 9 
function ninethTask() {
    const getul = document.querySelector('.todo-list')
    console.log(getul);
        getul.style.listStyle = 'none'
}
ninethTask()