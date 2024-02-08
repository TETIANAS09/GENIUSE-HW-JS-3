// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
/*
const fruits = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];

const newNames = [
  { id: 0, name: "Olga" },
  { id: 1, name: "Sasha" },
  { id: 2, name: "Jon" },
  { id: 3, name: "Piter" },
];

console.log(fruits);
console.log(newNames);

*/

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

//Resultat//
/*

for (let a = 2; a <= 10; a++) {
  if (a % 2 == 0) console.log(a);
}

*/

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.log( `цифра ${i}!` );
// }

//Resultat//
/*

let i = 0;
while (i < 5) {
  console.log(`Цифра ${i}!`);
  i++;
}

*/

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

//Result//
/*
let num;
do {
  num = prompt("Введіть число, більше за 100", 0);
} while (num <= 100 && num);

*/
// -- 5 --
// Вирахуйте середній вік

//Result//
/*
const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

const totalAge = girls.reduce((acc, girl) => {
  return acc + girl.age;
}, 0);
const averageAge = totalAge / girls.length;

console.log(averageAge);

*/
