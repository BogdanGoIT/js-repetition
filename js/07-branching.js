/*
 * Оператор ветвеления if
 */

// if (5 > 30) {
//   //  тело
//   console.log('qweqwe');
// }

// console.log('дальше');

/*
 * Оператор ветвления if...else
 */
// if (50 > 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }

/*
 * Оператор ветвления else...if
 */

const salary = 2999;

// if (salary <= 500) {
//     console.log('You Trainee');
// } else if (salary > 500 && salary < 1500) {
//     console.log('You Developer');
// } else if (salary >= 1500 && salary < 3000) {
//     console.log('You Middle');
// } else {
//     console.log('Senior');
// }

// console.log('qweqwe');

/*
 * Тернарный оператор
 */
const balance = -1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

// const message = условие ? выражение1 : выражение2;

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message)

/*
 * Блочная область видимости переменных
 */

// То что внутри не видно снаружи, но то что снаружи видно внутри

const b = 10;

if (true) {
    console.log(b);
    const a = 5;
    console.log(a);
}

console.log(b);
console.log(a);

if (true) {
  const b = 10;

  console.log(a);
}