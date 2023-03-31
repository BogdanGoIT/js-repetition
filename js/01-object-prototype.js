/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// // является прототипом для objB
// const objC = {
//   z: 5,
// };

// console.log('objC ', objC);

// // // 'Это собственное свойство объекта'
// // console.log(objC.hasOwnProperty('x'));

// // сделает пустой обьект у которого прототипом будет objC и запишет в меременную objB
// const objB = Object.create(objC);
// objB.y = 2;


// console.log('objB ', objB);

// // сделает пустой обьект у которого прототипом будет objB и запишет в меременную objA
// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA ',objA)

// console.log(objA.z)

// // перезаписать значение прототипа нельзя
// objA.z = 1000

// //  'Это свойство на объекте-прототипе'
// console.log(objA.hasOwnProperty('y'));

// // вы получаете undefined когда на всей цепочки прототипов нет такого свойства
// console.log(objA.qweqwe);

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

