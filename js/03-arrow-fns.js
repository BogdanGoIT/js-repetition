/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// const add = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };

// // 1 после равно мы сразу ставим параметры, сразу после этого ставим стрелку, после ставим тело
// // 2 если параметр один скобки можно опустить, если нет параметров пустые скобки
// // 3 если у стрелочной ф-ции больше одной инструкции ставим обычное тело и ретерн (явный возврат)
// // 4 что касается аргументов? нет локальной переменной arguments
// // 5 просто рестом соберите все аргументы ...args
// const addArrow = (...args) =>  {
//     console.log(args);
//     // return a + b + c;
// }

// // 6 если одна инструкция возврата, можно опустить тело ф-ции (неявный возврат)
// // const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));


// const fnA = function(){
//     return {
//         a: 5,
//     }
// }

// console.log(fnA());

// // 1 если справа от стрелки стоит фигурная скобка, то для интерпритатора это начала тела ф-ции
// // 2 в круглые скобки можна поставить обьект, и тогда результатом выражения будет {arrowA: 5}
// const arrowFnA = () => ({arrowA: 5});

// console.log(arrowFnA())

const filter = (array, test) => {

    const filteredArray = [];

    for(const el of array){
        console.log(el);
        const passed = test(el);

        if(passed){
            filteredArray.push(el);
        }
    }

    return filteredArray;
}

const callback1 = value => value >= 3


console.log(filter([1,2,3,4,5], callback1));

const r2 = filter([1,2,3,4,5,6,7,8], value => value <= 4)
console.log(r2);

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const r3 = filter(fruits, fruit => fruit.quantity >= 120)
console.log(r3);

