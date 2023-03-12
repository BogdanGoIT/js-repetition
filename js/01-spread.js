/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const numbers = [1,2,3].concat([4,5,6], [7,8,9]);


// // возьми массив [1, 2, 3] и распыли его в новый массив который я создаю
// const numbers = [...[1,2,3], 4, 5, 6, ...[7,8,9]];
// console.log(numbers)

// /*
//  * Поиск самой маленькой или большой температуры (числа)
//  */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// // // ожидает независимый набор аргументов не массив
// // console.log(Math.max(1, 4, 17, 5, 6));
// // // распыляем при передачи аргументов в ф-цию
// // console.log(Math.min(...temps));

// // const a = [1,2,3];

// // // сделается копия массива a
// // const b = [...a];

// // console.log(a);
// // console.log(b);

// // console.log(a === b);

// // Сложные типы передаются по ссылке

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// // 1 массивы разные 
// console.log(a === b);

// // 2 но в массиве a[0] и в массиве b[0] лежит ссылка на один и тот же обьект
// console.log(a[0] === b[0]);

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);


/*
 * Сшиваем несколько массивов в один через concat() и spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// old school
// const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);

// new school
const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps)


/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
// двух одинаковых свойств в обьекте быть не может, он перезаписывает предыдущие значения
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// первый аргумент тот обьект который вы будете наполнять, а вторым и третим вы передаете те обьекты которые вы хотите туда распылить:

// old school 
// const c = Object.assign({name: "Mango"}, a, b);

// new school
// в пустой обьект "c" распыли сначала все свойства "a" потом все свойства "b"
const c = {
    ...a, 
    x: 10,
    ...b, 
    y: 20 
}

console.log(c)

// цель куда распылять
// {
//     x: 0, 
//     y: 20,
//     z: 3
// }

// распыляются строки, массивы и обьекты
console.log(...'qwe');

// тема по умолчанию
const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
}

// мои настройки
const userSettings = {
    showNotifications: false,
    hideSidebar: true,
}

// сначала распыляются настройки по умолчанию, а поверх них мои настройки
const finalSettings = {
    ...defaultSettings,
    ...userSettings,
}

console.log(finalSettings);