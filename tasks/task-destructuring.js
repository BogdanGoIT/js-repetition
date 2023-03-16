// let propName = "name";
// const user = {
//     // властивість
//     age: 25,
// }

// // коли ми точно знаємо як називається ключ тоді використовуємо крапочку user.name
// // якщо назва ключа записана в змінну, або це динамічне значення яке може мінятися від ітерації до ітерації, тоді ви використовуїте квадратні дужки user[propName]

// user[propName] = "Генри"; // user["name"] = Генри // user.name = Генри

// // назва ключа - та ж сама що назва властивості
// console.log(user.age)


// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.moode = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);

// for(const key of keys){
//     console.log(`${key}: ${user[key]}`);
// }


// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function countSalary(obj){

//     const values= Object.values(obj);

//     let sum = 0;

//     for(const value of values){
//         sum += value;
//     }

//     return sum;
// }

// console.log(countSalary(salaries))

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта


// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName){
//     // Шукаємо обєкт в масиві
//     for(const stone of stones){
//         console.log(stone)
//         if(stoneName === stone.name){
//             return stone.price * stone.quantity;
//         }
//     }
//     return `${stoneName} не знайшли!`
// }

// console.log(calcTotalPrice(stones, 'Щебень'));


// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// // /*
// //  * Каждая транзакция это объект со свойствами: id, type и amount
// //  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) { // 135, 'deposit'
//     return {
//         amount, // amount: 135
//         type, // type: 'deposit'
//         id: this.transactions.length, // id: 0
//     }
//   },

//     /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//     deposit(amount) {
//         // let amount = 135
//         this.balance += amount; // this.balance + 135
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT); // this.createTransaction(135, Transaction.DEPOSIT)
//         this.transactions.push(transaction);
//     },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if(amount > this.balance){
//         return 'снятие такой суммы не возможно, недостаточно средств';
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     // let this = account // змінна яка доступнв всередині методів
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for(const transaction of this.transactions){
//         if(transaction.id === id){
//             return transaction;
//         }
//     }

//     return 'такої операції не існує!'
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;

//     for(let transaction of this.transactions){
//         if(transaction.type === type){
//             total += transaction.amount;
//         }
//     }

//     return total;
//   },
// }

// console.log(account.getBalance());
// account.deposit(135);
// account.withdraw(50);
// account.withdraw(60);
// account.withdraw(10);
// account.deposit(200);
// account.deposit(2000);
// account.withdraw(500);
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account)

// transaction['type'] === transaction.type // 'deposit' 'withdraw'

// ----- destructuring -----

// function foo( {username} = {} ){ 
//   // undefined
//   console.log(username);
// }

// // analog
// // function foo(obj){
// //   const {username} = obj;
// //   console.log(username);
// // }
// const user = {username: 'Bob'}
// foo(user);
// foo(); // {} => undefined

// // spread 
// {
//   ...foo
// }

// [...]

// // rest
// function foo(...rest){}


// ## Example 1 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// function calcBMI(props) {
//   const {weight, height} = props;
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// function calcBMI({weight, height}) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );


// ## Example 2 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// function printContactsInfo({names, phones}) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // // Было
// // printContactsInfo(
// //   "Jacob,William,Solomon,Artemis",
// //   "89001234567,89001112233,890055566377,890055566300"
// // );

// // Ожидается
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });


// ## Example 3 - Глубокая деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// function getBotReport({companyName, bots: {repair: repairBots, defence: defenceBots}}) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// function getBotReport(params) {
//   const {
//     companyName, 
//     bots: {repair: repairBots, defence: defenceBots}
//   } = params;

//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//         repair: 150,
//         defence: 50,
//     },
      
//   })
// );


// ## Example 5 - Операция spread

// Дополни функцию `createContact(partialContact)` так, чтобы она возвращала новый
// объект контакта с добавленными свойствами `id` и `createdAt`, а также `list` со
// значением "default" если в `partialContact` нет такого свойства.
// function createContact(partialContact){
//   const {list = 'default'} = partialContact;
//   return {
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date(),
//     list,
//   }
// }

// function createContact(partialContact){
//   // якщо partialContact.list буде null або undefined, підстав те що після ?? "default"
//   const list = partialContact.list ?? "default";

//   // analog
//   // let list;

//   // if(partialContact.list === undefined){
//   //   list = 'default';
//   // }else{
//   //   list = partialContact.list;
//   // }

//   return {
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date(),
//     list,
//   }
// }


// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }


// ## Example 6 - Операция rest

// Напиши функцию `transformUsername(user)` так, чтобы она возвращала новый обьект
// со свойством `fullName`, вместо `firstName` и `lastName`.

// function transformUsername({firstName, lastName, ...otherProps}){
//   return {
//     ...otherProps,
//     fullName: `${firstName} ${lastName}`,
//   }
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );





// function formatMessage(message, maxLength) {
//   let result;
//   if(message.length > maxLength){
//     result = message.slice(message, maxLength) + '...';
//   }else{
//     result = message;
//   }
//   // Change code below this line

//   /// Change code above this line
//   return result;
// }

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// result = message.length > maxLength ? message.slice(message, maxLength)  + '...' :  message;
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 23));


function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

