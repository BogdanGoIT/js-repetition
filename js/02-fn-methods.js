/*
 * call и apply
 */

// const showThis = function (...args) {
//     console.log(args)
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// }

// метод call(первым аргументом вы передаете обьект в контексте которго необходимо эту ф-цию вызвать, а вторым, третим, 10-мы вы передаете произвольное кол-во аргументов)
// showThis.call(objA, 10,20,30,40,50);
// showThis.apply(objA, [10, 20, 30])

// const objB = {
//     x: 788,
//     y: 25,
// };

// showThis.call(objB, 1, 1, 2);


const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};

// changeColor.call(hat, 'orange');

// // изменяет по ссылке свойство color
// console.log(hat)

const sweater = {
    color: 'green',
};


// changeColor.call(sweater, 'blue');

// // измени мне цвет в обькте свитер на синий
// console.log(sweater)


// changeColor.call(hat, 'orange');
// console.log(hat);

/*
 * bind - позволяет сделать копию ф-ции с привязаным контекстом
 */

// берет ф-цию делает копию с привязанным констектом hat
const changeHatColor = changeColor.bind(hat)
const changeSweaterColor = changeColor.bind(sweater);
// changeHatColor('yellow');
// console.log(hat)

// changeSweaterColor('red');
// console.log(sweater)

/*
 * counter
 */

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

// при передачи метода обьекта как callback контекст не сохраняется
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter)

