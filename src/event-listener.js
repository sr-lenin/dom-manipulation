const eventform = document.querySelector('#task-form')
eventform.addEventListener('submit', (event) => { 
    event.preventDefault()
    // event.stopPropagation()
    
    const inputs = event.target.children
    console.log(inputs.task.value);
})

const button = document.querySelector('#buttonn')
butonn.addEventListener('click', (event)=>{
    console.log('hizo click');
})

const input = document.querySelector('input[name="task"]')
input.addEventListener('input', (writeEvent)=> {
console.log(writeEvent.target.value);
})