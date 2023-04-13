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


// function changeEven (numbers, value) {
//     // Change code below this line
      
//       const newArray = [];
  
//       numbers.forEach(element => {
//         if (element % 2 === 0) 
//               newArray.push(element + value);
//           else
//             newArray.push(element);
//     });
  
//     return newArray;
      
  
//   }

/*


// Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.

масив.filter((element, index, array) => {
  // Тіло колбек-функції
});

- Не змінює оригінальний масив.
- Поелементо перебирає оригінальний масив.
- Повертає новий масив.
- Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
- Якщо колбек повернув true, елемент додається у масив, що повертається.
- Якщо колбек повернув false, елемент не додається у масив, що повертається.
- Якщо жоден елемент не задовольнив умову, повертає порожній масив.

Тобто метод filter викликає колбек-функцію для кожного елемента вихідного масиву і, якщо результат її виконання - true, додає поточний елемент у новий масив.

Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву 
припиняється. Тобто він шукає до першого збігу.

Метод every(callback) перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.

Метод some(callback) перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор.

массив.reduce((previousValue, element, index, array) => {
  // Тіло колбек-функції
}, initialValue);

- Не змінює оригінальний масив.
- Поелементо перебирає оригінальний масив.
- Повертає все, що завгодно.
- Робить все, що завгодно.

Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

// Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати колбек-функцію з двома параметрами. Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод sort() буде викликати її для двох довільних елементів.

масив.sort((a, b) => {
    // Callback function body
  });
  
a - перший елемент для порівняння.
b - другий елемент для порівняння.

Якщо виклик compareFunction(a, b) повертає будь-яке від'ємне значення, тобто a менше b, сортування поставить a перед b. Це сортування за зростанням.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

Якщо виклик compareFunction(a, b) повертає будь-яке додатне значення більше нуля, тобто b більше a, сортування поставить b перед a. Це сортування за спаданням.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів. Але взагалі неважливо, що повертати, якщо їх взаємний порядок не має значення.

Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().

firstString.localeCompare(secondString)

Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0

- Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
- Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
- Якщо рядки однакові, повертається нуль.

*/

// Використовуючи метод filter(), можна виконати фільтрацію масиву таким чином, що у ньому залишаться тільки унікальні елементи. Цей прийом працює тільки з масивом примітивних значень - не об'єктів.
// const students = [
//     { name: "Mango", courses: ["mathematics", "physics"] },
//     { name: "Poly", courses: ["science", "mathematics"] },
//     { name: "Kiwi", courses: ["physics", "biology"] },
//   ];

//   const allCourses = students.flatMap(student => student.courses);
//   console.log(allCourses);

//   const uniqueCourses = allCourses.filter(
//     (course, index, array) => array.indexOf(course) === index
//   );

//   console.log(uniqueCourses)

// Використовуючи array.indexOf(course), виконуємо пошук першого збігу поточного елемента course і отримуємо його індекс в оригінальному масиві усіх курсів. В параметрі index зберігається індекс поточного елемента course, перебираючи масив методом filter.

// Якщо результат indexOf() і значення index рівні - це унікальний елемент, тому що таке значення зустрічається в масиві вперше, і на поточній ітерації фільтр обробляє саме його.

// # Масив усіх курсів
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// Для елемента "mathematics" під індексом 0:
// - indexOf() поверне 0, тому що шукає перший збіг.
// - Значення параметра index буде 0.
// - Вони рівні, а отже, це унікальний елемент.

// Для елемента "mathematics" під індексом 3:
// - indexOf() поверне 0, тому що шукає перший збіг.
// - Значення параметра index буде 3.
// - Вони не рівні, а отже, це повторюваний - не унікальний елемент.

// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true

/*

    // Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.
    const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
        return previousValue + number;
    }, 0);
    
    console.log(total); // 32
    Перший параметр колбек-функції (previousValue) - це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації.

    Другим аргументом для reduce() можна передати необов'язкове початкове значення акумулятора - параметр initialValue.

    # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
    # присвоює їй значення параметра initialValue або першого елемента
    # масиву, що перебирається, якщо initialValue не задане.
    previousValue = 0

    # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
    # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
    Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
    Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
    Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
    Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
    Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

    # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
    Результат - 32

    Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.


// Change code below this line
// Change code below this line
const getTotalBalanceByGender = (users, gender) => [...users]
  .filter(users => users.gender === gender)
  .reduce((total, { balance }) => total + balance, 0);
// Change code above this line


*/


// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line
  
//   const totalAveragePlaytimePerGame = players.reduce((previousValue, {playtime, gamesPlayed}) => previousValue + playtime /  gamesPlayed, 0)
//   console.log(totalAveragePlaytimePerGame) // 1023

//   Ітерація 1 -> previousValue = 0 -> playtime / gamesPlayed -> return 0 + 317,5 -> return 317,5
//   Ітерація 2 -> previousValue = 317 -> playtime / gamesPlayed -> -> return 317,5 + 234 -> return 552
//   Ітерація 2 -> previousValue = 552 -> playtime / gamesPlayed -> return 552 + 230 -> return 782
//   Ітерація 2 -> previousValue = 782 -> playtime / gamesPlayed -> return 782 + 241 -> return 1023
// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 1023


// Через те, що сортується вихідний масив, порушується принцип чистоти функцій і не можна зручно створити декілька похідних колекцій на основі вихідної. Наприклад, створити колекцію, відсортовану за зростанням, а іншу - за спаданням. Тому перед сортуванням роблять повну копію вихідного масиву і сортують вже її.
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]


// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// ланцюжок методів

// // Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест. З цією метою ми відсортуємо копію масиву методом sort(), після чого методом map() створимо масив значень властивості name з відсортованого масиву.
// const students = [
//     { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//     { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//     { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//     { name: "Kiwi", score: 94, courses: ["literature", "science"] },
//   ];

//   // 1 Робимо копію вихідного масиву перед сортуванням.
//   // 2 На копії викликаємо метод sort().
//   // 3 До результату роботи методу sort() застосовуємо метод map().
//   // 4 Змінній names присвоюється результат роботи методу map().

//   const studentsName = [...students].sort((a, b) => a.score - b.score).map(student => student.name);
// console.log(studentsName);

// // Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
// // 1 На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
// // 2 До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
// // 3 На результаті методу filter() викликаємо sort().
// // 4 Змінній uniqueSortedCourses присвоюється результат роботи методу sort().

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b))

//   console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

//   // Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2-3 операцій. По-перше, перебираючі методи використовуються для порівняно простих операцій над колекцією. По-друге, виклик кожного наступного методу - це додаткове перебирання масиву, що за великої кількості, може позначитися на продуктивності.


// // Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line
  
//   const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b))

//   console.log(names)


// // Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).
// const getNamesSortedByFriendCount = users => [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name)


// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.
const getTotalBalanceByGender = (users, gender) => users
  .filter(users => users.gender === gender)
  .reduce((total, { balance }) => total + balance, 0);

console.log(
    getTotalBalanceByGender([
        {
          name: "Moore Hensley",
          email: "moorehensley@indexia.com",
          eyeColor: "blue",
          friends: ["Sharron Pace"],
          isActive: false,
          balance: 2811,
          gender: "male"
        },
        {
          name: "Sharlene Bush",
          email: "sharlenebush@tubesys.com",
          eyeColor: "blue",
          friends: ["Briana Decker", "Sharron Pace"],
          isActive: true,
          balance: 3821,
          gender: "female"
        },
        {
          name: "Ross Vazquez",
          email: "rossvazquez@xinware.com",
          eyeColor: "green",
          friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
          isActive: false,
          balance: 3793,
          gender: "male"
        },
        {
          name: "Elma Head",
          email: "elmahead@omatom.com",
          eyeColor: "green",
          friends: ["Goldie Gentry", "Aisha Tran"],
          isActive: true,
          balance: 2278,
          gender: "female"
        },
        {
          name: "Carey Barr",
          email: "careybarr@nurali.com",
          eyeColor: "blue",
          friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
          isActive: true,
          balance: 3951,
          gender: "male"
        },
        {
          name: "Blackburn Dotson",
          email: "blackburndotson@furnigeer.com",
          eyeColor: "brown",
          friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
          isActive: false,
          balance: 1498,
          gender: "male"
        },
        {
          name: "Sheree Anthony",
          email: "shereeanthony@kog.com",
          eyeColor: "brown",
          friends: ["Goldie Gentry", "Briana Decker"],
          isActive: true,
          balance: 2764,
          gender: "female"
        }
      ], "male"))