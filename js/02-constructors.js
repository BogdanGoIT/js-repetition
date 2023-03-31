/*
 * Основы ООП: класс - это чертеж, экземпляр - одна машина (объект), интерфейс - набор доступных свойств и методов для работы с этими свойствами
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */


// // прототип массива является интерфейсом массива, набор действий которые мы можем с ним сделать
// console.log([])

// ф-ция конструктор чертеж машины, не отвечает на вопрос что сделать
const Car = function({brand, model, price} = {}){
// const {brand, model, price} = config
// 2. Функция вызывается в контексте созданного объекта,
//    то есть в this записывается ссылка на него
this.brand = brand;
this.model = model;
this.price = price;

// 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

// 4. Ссылка на обьект возвращается в место вызова new Car
}

// console.log(Car.prototype);

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :) ');
// };

// Car.prototype.changePrice = function (newPrice){
//     this.price = newPrice;
// }

// // собрать машину по конструктору Car
// // 1. Если функция вызывается через new, создаётся пустой объект
// const myCar = new Car({
//     brand:'Audi', 
//     model: 'Q3', 
//     price: 35000
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000)

// // обьект который является экземпляром класса Car
// const myCar2 = new Car({ 
//     brand: 'BMW', 
//     model: 'X6', 
//     price: 50000 
// });
// console.log(myCar2);

// myCar2.sayHi()

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 })
// console.log(myCar3)

// myCar3.sayHi()

// чертеж пользователя
const User = function ( { email, password } = {} ){
    this.email = email;
    this.password = password;
};

User.prototype.changeEmail = function(newMail) {
    this.email = newMail;
}

const mango = new User( { email: 'mango@gmail.com', password: 1111 } );

mango.changeEmail("my-new-email@ukr.net");
// console.log(mango);


/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

User.message =
  'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj){
    console.log('User.logInfo -> obj', obj);

    console.log('Почта: ', obj.email);
    console.log('Пароль: ', obj.password);
}

// Object.keys();
// Object.values();

User.logInfo(mango)

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype

const objA = {
    x: 5
}

// console.log(objA.__proto__ === Object.prototype)

// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype

// this = Object.create(User.prototype)

// 9. Ссылка на обьект возвращается в место вызова new Фунукция()