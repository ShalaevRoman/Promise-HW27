// Написать Promise, который будет запрашивать ввод с клавиатуры чисел (использовать тэг input, с очисткой после каждого ввода), которые сохранит в массив.
// Закончить запрос чисел необходимо тогда, когда закончится время. Время - 10 сек.
// После этого - выполнить операцию, которая выведет массив в консоль.

const txt = document.querySelector("#txt");
console.dir(txt);



txt.addEventListener("change", e => {
  console.log(e)
  e.preventDefault()
  console.log(txt.value)
})
