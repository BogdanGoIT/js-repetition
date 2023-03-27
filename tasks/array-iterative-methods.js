// const numbers = [1,2,3,4,5,6,7];

// function mult(element){
//     console.log(element * 2)
// }

// for(let i = 0; i < numbers.length; i += 1){
//     mult(numbers[i])
// }

// for(let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i] * 2)
// }

// numbers.forEach(function (element) {
//     console.log(element * 2)
// })

// numbers.forEach(element => console.log(element * 2))

// numbers.forEach((number, index, arr) => console.log(number > arr[index - 1]))

// console.log(numbers);

//   const allCourses = ["JS", "HTML", "JS", "React"];
//   console.log(allCourses)

//   const uniqueCourses = allCourses.filter(
//     (course, index, array) => array.indexOf(course) === index
//   );

//   console.log(uniqueCourses);

// 1 - при першій ітерації мы шукаем index в массиві ["JS", "HTML", "JS", "React"].indexOf("JS")  
// course = "JS"
// index = allCourses.indexOf("JS")
// 0 === 0 // true
// ["JS"]

// 2
// course = "HTML"
// index = allCourses.indexOf("HTML")
// 1 === 1 // true
// ["JS", "HTML"]

// 3
// course = "JS"
// index = allCourses.indexOf("JS")
// 0 === 2 // false
// ["JS", "HTML"]

// Уникальні елементи
// console.log(new Set(allCourses))


// # Модуль 4. Занятие 7. Коллбеки. Стрелочные функции. forEach

// ## Example 1 - Коллбек функции

// Напишите следующие функции:

// - `createProduct(obj, callback)` - принимает объект товара без id, а также
//   колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в
//   свойство `id` и вызывает колбек передавая ему созданный обьект.
// - `logProduct(product)` - коллбек принимающий обьект продукта и логирующий его в
//   консоль
// - `logTotalPrice(product)` - коллбек принимающий обьект продукта и логирующий
//   общую стоимость товара в консоль

// ```js
// // Решение

// function logProduct(product){
//     console.log(product);
// }

// function logTotalPrice({price, quantity}){
//     console.log(price * quantity)
// }

// function createProduct(obj, cb){
//     const product = {
//         ...obj,
//         id: Date.now(),
//     }
//     cb(product);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);]


// ## Example 2 - Коллбек функции

// Добавьте объекту `account` методы `withdraw(amount, onSuccess, onError)` и
// `deposit(amount, onSuccess, onError)`, где первый параметр это сумма операции, а
// второй и третий - колбеки.

// Метод `withdraw` вызывает onError если amount больше TRANSACTION_LIMIT или
// this.balance, и onSuccess в противном случае.

// Метод `deposit` вызывает onError если amount больше TRANSACTION_LIMIT или меньше
// либо равен нулю, и onSuccess в противном случае.

// ```js
// // Решение

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,

//   // за допомогою callback вы можете розширяти логіку вже існуючих ф-цій, не пишучи в цих ф-ція нічого нового, просто викликати callback які ви передали
//   withdraw(amount, onSuccess, onError) {
//     if(amount > TRANSACTION_LIMIT){
//         onError("Сума перевищує ліміт");
//         return
//     }
//     if(amount > this.balance){
//         onError("Сума перевищує баланс на рахунку");
//         return
//     }

//     this.balance -= amount;
//     onSuccess('Операція по зняттю коштів успішна')
//   },
//   deposit(amount, onSuccess, onError){
//     if(amount > TRANSACTION_LIMIT){
//         onError("Сума перевищує ліміт");
//         return
//     }
//     if(amount < 0){
//         onError("Сума меньша 0");
//         return
//     }
//     if(amount === 0){
//         onError("Сума дорівнює 0");
//         return
//     }
//     onSuccess('Баланс поповнено успішно')
//     this.balance += amount
//   }
// }

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);


// ## Example 3 - Коллбек функции

// Напишите функцию `each(array, callback)`, которая первым параметром ожидает
// массив, а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты
// вызова коллбека.

// const each = (array, callback) => {
//     const result = []
//     for(const element of array){
//         result.push(callback(element))
//     }

//     return result;
// }

// console.log(each([64, 49, 36, 25, 16],  value => value * 2));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], value => Math.sqrt(value))
// );

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value))); //25.8 => 26 25.001 => 26

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));


// ## Example 7 - Метод forEach - нічого не повертає, а лише перебира масив

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// ```js
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = (items) => {
//     console.log(items);
//     [...items].forEach((item, index) =>  console.log(`${index + 1} - ${item}`) )
//   }

// console.log(logItems(["Mango", "Poly", "Ajax"]));
// console.log(logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]));


// lesson #8

// # Модуль 4. Занятие 8. Перебирающие методы массива

// ## Коллекция объектов для всех примеров с автомобилями
// const cars = [
//     {
//       make: "Honda",
//       model: "CR-V",
//       type: "suv",
//       amount: 14,
//       price: 24045,
//       onSale: true,
//     },
//     {
//       make: "Honda",
//       model: "Accord",
//       type: "sedan",
//       amount: 2,
//       price: 22455,
//       onSale: true,
//     },
//     {
//       make: "Mazda",
//       model: "Mazda 6",
//       type: "sedan",
//       amount: 8,
//       price: 24195,
//       onSale: false,
//     },
//     {
//       make: "Mazda",
//       model: "CX-9",
//       type: "suv",
//       amount: 7,
//       price: 31520,
//       onSale: true,
//     },
//     {
//       make: "Toyota",
//       model: "4Runner",
//       type: "suv",
//       amount: 19,
//       price: 34210,
//       onSale: false,
//     },
//     {
//       make: "Toyota",
//       model: "Sequoia",
//       type: "suv",
//       amount: 16,
//       price: 45560,
//       onSale: false,
//     },
//     {
//       make: "Toyota",
//       model: "Tacoma",
//       type: "truck",
//       amount: 4,
//       price: 24320,
//       onSale: true,
//     },
//     {
//       make: "Ford",
//       model: "F-150",
//       type: "truck",
//       amount: 11,
//       price: 27110,
//       onSale: true,
//     },
//     {
//       make: "Ford",
//       model: "Fusion",
//       type: "sedan",
//       amount: 13,
//       price: 22120,
//       onSale: true,
//     },
//     {
//       make: "Ford",
//       model: "Explorer",
//       type: "suv",
//       amount: 6,
//       price: 31660,
//       onSale: false,
//     },
//   ];

// console.table(cars);

// ## Example 1 - Метод map

// шаблон функціонального метода - массив.метод(function callback(елемент, індекс, массив) {})

// array.method((element, index, array) => {
//     // some logic
// })

// ```js

// явний return
// const getModels = function(cars){
//     return cars.map(car => car.model)
// }

// не явний return
// const getModels = cars => cars.map(car => car.model);

// console.log(getModels(cars));
// console.table(cars);


// ## Example 2 - Метод map

// Пусть функция `makeCarsWithDiscount` возвращает новый массив объектов с изменным
// значением свойства `price` в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(car => {
//         return {
//             ...car,
//             price: (1-discount) * car.price,
//         }
//     })
// };

// const makeCarsWithDiscount = (cars, discount) => cars.map(car => 
//     ({
//         ...car, 
//         price: (1-discount) * car.price
//     })
// );


// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));


// ## Example 3 - Метод filter

// Пусть функция `filterByPrice` возвращает массив автомобилей цена которых меньше
// чем значение параметра `threshold`.

// якщо при фільтрації буде true цей елемент попаде в результат роботи filter 
// const filterByPrice = (cars, threshold) => cars.filter(car => car.price < threshold)

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));


// ## Example 4 - Метод filter

// Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
// onSale которых true.

// на розпродажі
// const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

// не на розпродажі, деструктуризація
// const getCarsWithDiscount = cars => cars.filter(({onSale}) => !onSale);

// console.table(cars);
// console.table(getCarsWithDiscount(cars));


// ## Example 6 - Метод find

// знайти машину по моделям
// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));


// ## Example 7 - Метод sort

// Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
// отсортированный по возврастанию значения свойства `amount`.

// ```js
// const sortByAscendingAmount = cars => [...cars].sort(
//     // якщо число більше 0 то він міняє місцями обьект.a і обьект.b 
//     // якщо -1 він залишає на тих індексах на яких вони були
//     // (a, b) => a.amount < b.amount ? -1 : 1); // 14 < 2 // false => 1
//     (a, b) => b.amount - a.amount); // 14 - 2 // 12 > 0 => 1
//     // b - 1 => 0

// console.table(sortByAscendingAmount(cars));


// ## Example 8 - Метод sort

// Пусть функция `sortByDescendingPrice` возвращает новый массив автомобилей
// отсортированный по убыванию значения свойства `price`.

// ```js
// const sortByDescendingPrice = (cars) => {
//   const carsCopy = [...cars];
//   return carsCopy.sort((a, b) => b.price - a.price);
// };

// const sortByDescendingPrice = cars => [...cars].sort((a, b) => a.price - b.price);

// console.table(sortByDescendingPrice(cars));


// ## Example 9 - Метод sort

// Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
// по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
// значения параметра `order`.

// ```js
// const sortByModel = (cars, order) => {
//     if(order === "asc"){
//         return [...cars].sort((a, b)=> a.model.localeCompare(b.model))
//     }
//     if(order === "desc"){
//         return [...cars].sort((a, b)=> b.model.localeCompare(a.model))
//     }
// }
    
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));


// ## Example 10 - Метод reduce

// Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
// свойств `amount`).

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, car) => (acc += car.amount), 0);

// const reduceValue = (acc, car) => (acc += car.amount + car.price);
// acc = 0
// 2*6 = 12
// 0 + 12

// acc = acc + car.amount + car.price

// acc = 12
// 3 * 5 = 15
// acc = 15 + 12 = 27

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, car) => (acc += car.amount * car.price), 0);

// const getTotalAmount = (cars) => cars.reduce(reduceValue, 0);

// cars.reduce(arg1, arg2);

// console.log(getTotalAmount(cars));


// ## Example 11 - Цепочки методов

// Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
// только тех, которые сейчас на распродаже.

// const getModelsOnSale = (cars) => 
//     cars
//         .filter(car => car.onSale)
//         .map(car => car.model)
//         .sort((a, b) => a.localeCompare(b))
//         .find(model => model === 'Fusion')
//         .toUpperCase()

// console.log(getModelsOnSale(cars))


// ## Example 12 - Цепочки методов

// Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
// (свойство onSale), отсортированных по возрастанию цены.

// const getSortedCarsOnSale = cars => cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));


// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
  
//     updateBook(oldName, newName) {
//       // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
  
//     this.books.splice(bookIndex, 1, newName);
//       // Change code above this line
//     },
  
//   };
  


// const bookShelf = {
//     books: ["Останнє королівство"],
//     getBooks() {
//       console.log(this);
//     },
//   };
  
//   // Перед крапкою знаходиться об'єкт bookShelf,
//   // тому, викликаючи метод, this буде зберігати посилання на нього.
//   bookShelf.getBooks(); // {books: ["Останнє королівство"], getBooks: f}

// const bookShelf = {
//   books: ["Останнє королівство"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ["Останнє королівство"], getBooks: f}


// // Для того щоб отримати доступ до властивостей об'єкта в методах, ми звертаємось до нього через this і далі, стандартно - «через крапку» до властивостей.
// const bookShelf = {
//   books: ["Останнє королівство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["Останнє королівство"]
// bookShelf.addBook("Імла");
// bookShelf.addBook("Страж снів");
// console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
// bookShelf.removeBook("Імла");
// console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]




  
  
  









  



























