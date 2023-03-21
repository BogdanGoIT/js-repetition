// const add = function (a, b){
//     return a + b;
// }

// console.log(add(5, 10))


/*
* Синтаксис стрелочной ф-ции
- с параметрами
- с одним параметром
- без параметров
*/

// // с параметрами
// const add = (a, b) => {
//     return a + b
// }
// console.log(add(5, 10));

// // с одним параметром
// const logMessage = message => {
//     console.log(message)
// }

// logMessage('Привіт')

// // без параметров
// const greet = () => {
//     console.log('Привіт')
// }
// greet()


/*
* Явный и неявный возврат
*/ 


// Явный есть тело ф-ции и явно указан return что возвращать
// const add = (a, b) => {
//     return a + b
// }

// console.log(add(2, 3));

// Неявный если у вас внутри тела только return
// const add = (a, b) => a + b;
// console.log(add(2, 3));


/*
* Псевдомассив arguments
*/ 

const add = (...args) => {
    console.log(args);
}

add(1,2,3,4,5,6,7)