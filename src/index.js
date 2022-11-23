const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-form input[name="task"]')
const todos = document.querySelector('#todo-list')

// tarea 1
const buttonElement = document.createElement("button")
taskForm.appendChild(buttonElement)

// tarea 2
const formTittle = document.createElement('h2')
formTittle.textContent = 'Task Form'
taskForm.before(formTittle)

// tarea 3
const listTittle = document.createElement('h2')
listTittle.textContent = 'Todo List'
listTittle.style.color =  'blue' 
todos.before(listTittle)

const inputElement = document.createElement('input')
inputElement.type = 'date'
inputElement.value = '2022-11-23'
// inputElement.value = new Date().toISOString().split('T')[0]
taskInput.after(inputElement)