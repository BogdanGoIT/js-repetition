/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumbers = numbers[0];

for(const number of numbers){
    // если мы вытянули монетку меньше чем перед нами лежит
    if(number < smallestNumbers){
        smallestNumbers = number;
    }
}
console.log('smallestNumbers: ', smallestNumbers);