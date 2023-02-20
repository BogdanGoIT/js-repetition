/*
 * - Переменные и типы примитивов
 * - const и let
 * - Логирование с методом console.log()
 * - Уникальность идентификатора
 */

// Переменная обьявленная через const должна быть сразу инициализирована значением и в неё нельзя записать другое значение
// const x = 5;
// x = 10;

// пременные которые надо будет изменять обьявлеет через let - сума покупок товара, возраст
// let x = 5;
// x = 10;

const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = 'Добро пожаловать!';
const isOpen = true;
const shouldConfirm = false;

// метод .log()
console.log('Цена:', totalPrice);

/*
 * * - Оператор typeof
 */

const type = typeof isOpen;

console.log(type);

/*
 * - Как window.alert() блокирует интерпретацию
 */

// console.log('До');
// alert('qweqweqwe');
// console.log('После');