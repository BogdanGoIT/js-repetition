/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

const fnA = function (parameter) {
    const innerVariable = 'значение внутренней переменной функции fnA';

    const innerFunction = function(param){
        console.log(parameter);
        console.log(innerVariable);
        console.log('Это вызов innerFunction')
    }

    // ф-ция когда мы её возвращаем, она замыкается на области видимости fnA
    return innerFunction;
}

// // 1 когда вызываю fnA результатом её работы возвращается ф-ция innerFunction
// // 2 я могу передать параметр, и я буду получать к нему доступ в fnB
// const fnB = fnA(555);

// // innerFunction будет иметь доступ ко всем локальным переменным, параметрам, даже если она будет вызвана в не тела fnA
// fnB();

// // в переменной fnB лежит ф-ция innerFunction
// console.log(fnB);

/*
 * Поварёнок
 */
const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовит ${dish}`);
};

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// ф-ция сделай шефа, будем передавать имя шефа
const makeSheff = function(name){
    const innverVar = 555;
    const message = 'hello';

    const makeDish = function (dish) {
        console.log(message);
        console.log(innverVar);
        console.log(`${name} готовит ${dish}`);
    };

    // возвращаем ф-цию сделай блюдо, которое будет получать доступ к параметру name
    return makeDish
}

// // в переменную mango сделай мне шефа 'Mango' записался в параметр name 
// const mango = makeSheff('Mango');

// // [[Scopes]] // Closure (makeSheff) {name: 'Mango'}
// console.dir(mango);

// const poly = makeSheff('Poly');

// // // [[Scopes]] // Closure (makeSheff) {name: 'Poly'}
// console.dir(poly);

// // в переменной mango сейчас ф-ция makeDish, и если эту ф-цию вызвать то она будет получать доступ к name
// console.log(mango);

// // вызывается ф-ция makeDish, поэтому котлеты записываются в параметр dish, а name был передан в makeSheff('Mango')
// mango('котлеты');
// mango('пирожок');

// poly('чай');
// poly('омлет');

// Замыкание - если вы одну ф-цию возвращаете из другой ф-ции, то при вызове возвращенной ф-ции она получает доступ ко всем внутреннем переменным и параметрам родительской, где б вы её не вызвали



/*
 * Округлятор 🤷‍♂️
 */

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint); // 3
const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// 1 мы вызываем ф-цию rounder
const rounder = function(places){

    // 2 она с результатом своей роботы возвращает эту ф-цию
    return function(number){
        return Number(number.toFixed(places));
    }
}

// // 3 но перед этим 2 или 3 записывается в параметр places
// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// // 4 и для этой внутренней ф-ции которая возвращается places попадает в замыкание
// console.dir(rounder2);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));


/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount){
            if(amount > 1000){
                return 'ты офигел?';
            }
            salary += amount
        },
        lower(amount){
            salary -= amount
        },
        current(){
            return `Текущая зарпалата ${employeeName} - ${salary}`;
        }
    }
}

// 1 salaryManager - это просто обьект, мы вызываем менеджера он возвращает обьект, в этом обьекте есть методы, которые замыкаются на области видимости salaryManagerFactory и получат доступ к параметрам и переменной salary
const salaryManager = salaryManagerFactory("Mango", 5000);

// 2 поэтому мы можем внутри них использовать эти переменные и они будут к ним получать доступ, даже если будут вызываться не в родительской ф-ции
console.log(salaryManager.current());

console.log(salaryManager.raise(1000));

console.log(salaryManager.current());



// // 1 при вызове ф-ции я получу обьект обратно
// const myLibFactory = function(){
//     let value = 0;

//     const add = function(num){
//         value += num;
//     }

//     return {
//         add: add,
//         getValue(){
//             return value;
//         }
//     }
// }

// // 2 в этом обьекте не будет переменной value не будет свойства value
// const myLib = myLibFactory();

// // ф-ция замкнулась на value и никто туда доступ не получит
// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue())



// const myLib = {
//     value123: 0,
//     add(num){
//         this.value123 += num;
//     },
//     getValue(){
//         return this.value123;
//     }
// }

// myLib.add(5);

// console.log(myLib.getValue())


// console.log(myLib)

// // проблема что доступ к свойству value может получить любой на прямую
// console.log(myLib.value123321)
