// Написать Promise, который будет запрашивать ввод с клавиатуры чисел (использовать тэг input, с очисткой после каждого ввода), которые сохранит в массив.
// Закончить запрос чисел необходимо тогда, когда закончится время. Время - 10 сек.
// После этого - выполнить операцию, которая выведет массив в консоль.

const txt = document.querySelector("#txt");
let keys = [];

txt.addEventListener("change", e => {
  e.preventDefault()
  let string = e.target.value.split('')
  string.forEach(element => {
    keys.push(element)
  });
  console.log(keys)
  e.target.value = '';
})

