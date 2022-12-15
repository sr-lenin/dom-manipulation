const suma = () => {
    // Number = 2;
}

const doTask = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(suma); 
        }, 3000);
    })
}

doTask().then((suma) => console.log(7));