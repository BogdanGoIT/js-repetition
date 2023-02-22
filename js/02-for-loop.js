/*
    for (инициализация; условие; пост - выражение){
            тело цикла
        }
*/

// i = i + 1 === i += 1

// for (let i = 10; i >= 0; i -= 3) {
//   console.log(i);
// }

// console.log('qweqwe');
/*
 * Pre-increment и Post-increment
 */


//  1 сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3 сгенерить случайную зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );

//   console.log(`ЗП работника номер ${i} - ${salary}`);

//   // 4  прибавить к тоталу
//   totalSalary += salary;
// }

// // 5 лог
// console.log('totalSalary: ', totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// остаток от деления, сколько роз влезает 3 в 10 => 3 + 3 + 3 = 9 остаток 1
// console.log(10 % 3); // 1
// console.log(5 % 3); // 2

// число четное когда остаток от деления 0
// console.log(4 % 2); // 0

//  1 вары
const min = 0;
const max = 5;
let total = 0;

// фор от min до max с шагом в 1
for (let i = min; i <= max; i += 1) {
  // проверяем остаток от деления
  if (i % 2 !== 0) {
    // console.log('Не чётное: ', i);
      
    // continue - прирывает текущую итерацию, иди на следующую, код ниже не выполнится
    continue;
  }

  // пишем в сумму
  console.log('чётное: ', i);
  total += i;

  // аналог +=
  // total = total + i;
}

console.log('total: ', total);


