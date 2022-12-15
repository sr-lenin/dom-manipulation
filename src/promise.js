const suma = () => {
  // Number = 2;
  return 2;
};

const doTask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(suma);
    }, 3000);
  });
};

// console.log("do task without await");
// doTask()
//   .then((suma) => suma())
//   .then((value) => value * 2)
//   .then((value) => console.log(value));
// console.log("do task without await finished");
//   async / await
const doTaskAsync = async () => {
  console.log("do task with await");
  const suma = await doTask();
  let value = suma();
  value = value * 2;
  console.log(value);
  console.log("do task with await finished");
};

doTaskAsync()
  .then((value) => console.log("value"))
  .catch(() => Promise.reject(12))
  .then((value) => console.log("valor en el then", value))
  .catch((error) => console.log("valor en el catch", error));
