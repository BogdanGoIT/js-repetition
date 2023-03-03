/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

// 1 создать переменную 
let total = 0

// 2 обьеденить два массива в один
const numbers = array1.concat(array2);

// 3 перебрать масив 
for(const number of numbers){
    console.log(number);

    // 4 каждый элемент приплюсовать к total
    total += number;
}

console.log('total: ', total)
 