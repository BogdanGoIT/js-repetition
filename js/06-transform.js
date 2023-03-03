/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// // 1 перебрать массив
// for(const friend of friends){

        // 2 взять массив и сшить в строку
//     string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

// метод join(', ') - запитой элименты массива будут разделены
let string = friends.join(',');
console.log(friends);
console.log(string);

// Должно получиться 'Mango,Poly,Kiwi,Ajax'