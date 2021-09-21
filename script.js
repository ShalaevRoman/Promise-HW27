// Написать Promise, который будет запрашивать ввод с клавиатуры чисел (использовать тэг input, с очисткой после каждого ввода), которые сохранит в массив.
// Закончить запрос чисел необходимо тогда, когда закончится время. Время - 10 сек.
// После этого - выполнить операцию, которая выведет массив в консоль.

const txt = document.querySelector("#txt");
txt.disabled = true;
const form = document.querySelector("#form")
let keys = [];

form.addEventListener("submit", e => e.preventDefault());


txt.addEventListener("change", e => {
  keys.push(e.target.value)
  e.target.value = '';
})

const promise = new Promise (function(resolve) { 
  txt.disabled = false;
  return setTimeout(() => resolve(keys), 5000)
}) 

promise
  .then(
    function(data){
      txt.disabled = true;
      console.log(data)
    }
  )
