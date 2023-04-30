// const button = document.querySelector('button');

// // знайди найближчий div відносно моєї кнопки, не шукає сусідній, а лише вверх по ієрархії
// // console.log(button.closest('div'));

// // якщо ви називаєте змінні, то змінна має називатися якимось іменноком, для того щоб можна було побчачити що в цій змінній зберігається: дані про користувача, дані про товар, ціна, імя...

// // будь яка ф-ція це має бути дієслово, вона має розповідати, що робить?: створює список, додає клас, міняє колір, видаляє елемент зі списку

// const overlay = document.querySelector('.overlay');
// const modal = document.querySelector('.modal');
// const title = document.createElement("h1");

// title.textContent = "Hello World";

// // cloneNode - зробити копію заголовка
// const titleCopy = title.cloneNode(true);

// overlay.append(title);
// modal.append(titleCopy)



// замикання використовується для того щоб заховати змінні, на які не можна повпливати зовні, в хуках реакт
// function slider(slideCount){
//     let photoNumbers = slideCount;

//     function animation (time){
//         console.log(`animation slider ${photoNumbers} with time ${time}`)
//     }

//     return animation;
// }

// const slider1 = slider(10); // local scope {photoNumbers: 10, animation => знає про число 10}
// console.log(slider1(200))

// const slider2 = slider(20); // local scope {photoNumbers: 20, animation => знає про число 20}
// console.log(slider2())


// const user = {
//     name: 'John',
//     age: 30,
//     status: "Premium"
// }

// через крапочку ми чітко вказуємо точну назву ключа
// console.log(user.name);
// console.log(user.age);

// const userChoise = prompt("Enter object key");

// // якщо назва ключа записується в змінну тоді треба використовувати квадратні дужки
// console.log(user[userChoise]) // user['age] 

// console.log(user["name"]);
// console.log(user["age"]);


// const numbers = [1,2,3,4,5,6];

// 1) Лічильник - змінна яка контролює скільки разів відпрацював цикл - i = 0
// 2) Умова при якій цикл зупиниться - цикл зупиниться якщо лічильник буде більший за довжину масива
// 3) Код який змінює значення лічильника i += 1
// for(let i = 0; i < numbers.length; i += 1){
//     // if(i % 2 !== 0){
//     //     continue;
//     // }
//     if(i === 2){
//         break;
//     }
//     console.log(numbers[i])
// }

// let i = 0;
// // while(i < numbers.length){
// //     console.log(numbers[i]);
// //     i += 1;
// // }

// let pass = 4;
// do{
//     console.log(numbers[i]);
//     i += 1;
// }while(pass === numbers.length)


// рекурсия

// function pow(number, power){
//     if(power === 0){
//         return 1;
//     }

//     return number * pow(number, power - 1)
// }

// console.log(pow(2, 3))

// number = 2 power = 3 => 2 * pow(2, 2) => 
// number = 2 power = 2 => 2 * pow(2, 1) => 
// number = 2 power = 1 => 2 * pow(2, 0) =>
// number = 2 power = 0 => 1

// pow(2, 0); // 1
// pow(2, 1); // 2 * 1 => 2
// pow(2, 2); // 2 * 2 => 4
// pow(2, 4); // 2 * 4 => 8

// const user = {
//    name: 'John',
//    age: 20,
// //    showUserThis: function(){
// //     console.log('showUserThis', this); // user
// //     const arrowThis = () => {
// //         console.log("arrow", this)
// //     };
// //     arrowThis()
// //    },
//     arrowThis: () => {
//         console.log("arrow", this) // undefined
//     }
// };

// function showThis(){
//     console.log("function", this); // undefined
// }

// const arrowThis = () => {
//     console.log("arrow", this) // undefined
// };

// // showThis - привязуємо до user
// showThis.call(user);
// showThis.apply(user);

// // bind - створює нову ф-цію з привязаним контекстом
// const bindedFunction = showThis.bind(user);
// bindedFunction()

// user.showUserThis();
// arrowThis()

// на стрілочну ф-цію call, apply і bind не діють
// user.arrowThis.call(user)
// user.arrowThis.bind(user)()

// call і apply - вони відразу запускають ф-цію
// call - coma
// apply - array



// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const myMap = (arr, callback) => {
//     const result = [];
//     for(let element of arr){
//         result.push(callback(element))
//     }
//     return result;
// }

// console.log(myMap(numbers, x => x * 2));
// console.log(myMap(numbers, x => x - 2));

// const v1 = numbers.map(number => number * 2);
// const v2 = numbers.map(number => number - 2);
// console.log(v1);
// console.log(v2);


function createTransaction (amount, onError, onSuccess) {
    if(amount < 0){
        onError();
    }else{
        onSuccess(amount)
    }

}

createTransaction(100, error, success);

function error (){
    console.log('Transaction field');
}

function success (amount) {
    console.log('Transaction successful. Amount:', amount);
}