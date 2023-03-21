/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

const numbers = [5, 10, 15, 20, 25];

// 1 number - текущий
// 2 index
// 3 array - ссылка на оригинальный массив
numbers.forEach(function(number, index, array){
    console.log(`${index} - ${number}`)
});