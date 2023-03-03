/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

// 1 перебрать массив  
// for(let i = 0; i < logins.length; i += 1 ){
//     const login = logins[i];

//     // 2 каждый элимент сравнить
//     if(login === loginToFind){
//        message = `Пользователь ${loginToFind} найден.`;

//        // если нашли прирываем цикл
//         break;
//     }   

//     console.log(logins[i]);
// }

// for(const login of logins){
//     console.log(login);

//     if(login === loginToFind){
//         message = `Пользователь ${loginToFind} найден.`;

//        // если нашли прирываем цикл
//         break; 
//     }
// }

// console.log(message);

// если вам нужно приметивное значение(число, строка) найти в массиве
const message = logins.includes(loginToFind) // true
    ? `Пользователь ${loginToFind} найден.` 
    : `Пользователь ${loginToFind} не найден.`;

console.log(message);
