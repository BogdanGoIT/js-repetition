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
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) { // 135, 'deposit'
    return {
        amount, // amount: 135
        type, // type: 'deposit'
        id: this.transactions.length, // id: 0
    }
  },

    /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        // let amount = 135
        this.balance += amount; // this.balance + 135
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT); // this.createTransaction(135, Transaction.DEPOSIT)
        this.transactions.push(transaction);
    },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if(amount > this.balance){
        return 'снятие такой суммы не возможно, недостаточно средств';
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    // let this = account // змінна яка доступнв всередині методів
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for(const transaction of this.transactions){
        if(transaction.id === id){
            return transaction;
        }
    }

    return 'такої операції не існує!'
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    for(let transaction of this.transactions){
        if(transaction.type === type){
            total += transaction.amount;
        }
    }

    return total;
  },
}

console.log(account.getBalance());
account.deposit(135);
account.withdraw(50);
account.withdraw(60);
account.withdraw(10);
account.deposit(200);
account.deposit(2000);
account.withdraw(500);
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account)

// transaction['type'] === transaction.type // 'deposit' 'withdraw'