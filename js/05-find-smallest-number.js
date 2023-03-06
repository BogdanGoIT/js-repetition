/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [5, 4, 8, 15, 2, 25, 3];

// 1 создать ф-цию 
const findSmallesNumber = function(numbers){

    // 2 создать переменную с первым элиментом массива
    let smallNumber = numbers[0];

    // 3 перебрать массив
    for(const number of numbers){
        if(number < smallNumber ){
            smallNumber = number;
        }
    }

    return smallNumber;
}

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// нет метода includes()
// function fn(string){
//     string.includes(string) // error : string.includes is not a function
// }

// fn(5);