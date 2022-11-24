const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-form input[name="task"]')
const todos = document.querySelector('#todo-list')
const toLi = document.querySelector('list')

// tarea 1
function firstStack() {
const buttonElement = document.createElement("button")
taskForm.appendChild(buttonElement)
}
// tarea 2
function seconStack() {
const formTittle = document.createElement('h2')
formTittle.textContent = 'Task Form'
taskForm.before(formTittle)
}
// tarea 3
function thirdStack() {
const listTittle = document.createElement('h2')
listTittle.textContent = 'Todo List'
listTittle.style.color =  'blue' 
todos.before(listTittle)
}
// tarea 4
function fourthStack () {
const inputElement = document.createElement('input')
inputElement.type = 'date'
inputElement.value = '2022-11-23'
// inputElement.value = new Date().toISOString().split('T')[0]
taskInput.after(inputElement)
}
// tarea 5
function fifthStack () {
const removeLi = ('li')
list.remove()
}
// tarea 6
function sixthStack () {
const createLi = document.createElement('li')
createLi.textContent = 'primera tarea'
todos.prepend(createLi)
}
// tarea 7
function seventhStack () {
const createClass = ('ul')
todos.classList.toggle('todo-list')
}