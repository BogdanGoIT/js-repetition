/*
 * Перебор через for...in и Object.keys|values|entries
 */

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
  };

let totalFeedback = 0;

// // получи массив ключей из обьекта feedback
// const keys = Object.keys(feedback);
// console.log(keys);

// for(const key of keys){
//     // ключи обьекта
//     console.log(key);

//     // значения обьекта
//     console.log(feedback[key]);

//     // общее кол-во фидбеков
//     totalFeedback += feedback[key];
// }

// console.log('totalFeedbeck: ', totalFeedback);

// получи массив значений из обьекта feedback
const values = Object.values(feedback);

console.log(values);

for(const value of values){
    totalFeedback += value;
}

console.log('totalFeedbeck: ', totalFeedback);

