# Notas

## Creacion de elementos
crea un elemeneto con el nombre de la etiqueta como se escribe en html
```javascript
const boton = document.createElement("button")
boton.style.color = "blue"
```

## Agregar un elemento en la pagina
agrega un elemento dentro del formulario como su ultimo hijo
```js
taskForm.appendChild(boton)
```

agraga un elemento dentro del formulario como primer hijo
```js
taskForm.prepend(h1)
```

agrega un elemento antes del formulario como hermano 
```js
taskForm.before(h1)
```

agrega un elementpo despues del formulario como hermano
```js
taskForm.after(h1)
```

## Quitar un elemento de la pagina
elimina un elemento
```js
taskForm.remove()
```

elimina un elemento de los hijos del formulario
```js
taskForm.removeChild(h1)
```

## Cambiar las clases CSS de un elemento

agrega una o varias clases al elemento
```js
taskForm.classList.add("amigo", 'primo')
```
borra una clase ya existente dek elemento
```js
taskForm.classList.remove('primo')
```

agrega una clase innesistente y/o borra si ya hay una
```js
taskForm.classList.toggle('hermano')
```

remplaza una clase por otra
```js
taskForm.classList.replace('amigo', 'hermana')
```

## Propiedades de un elemento
ver propiendades de los ementos
```js
console.log(taskForm);
```

ver el valor de un input
```js
console.log(taskInput.value);
```

modificar el valor del input
```js
taskInput.value = "fecha"
```

# Agregar Texto
```js
const h2Element = document.createElement('h2')
h2Element.textContent = 'Task Form'
```

## Abrir el Preview del MarkDown(.md) en VSCode
`Ctrl + P`, `>`, `Markdown`