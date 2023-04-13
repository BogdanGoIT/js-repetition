// const foo = () => console.log(this)

// // foo();

// // Різниця між звичайною ф-цією і стрілочною:
// // 1 для звичайної ф-ції контекст визначається в момент запучку
// // 2 для стрілочної в момент її створення

// const user = {
//     name: "Bob",
//     age: 12,
//     test: () => {
//         console.log(this)
//     },

//     // контекст це змінна яка існує лише у ф-ціях
//     test2(){
//         console.log("this2", this); // user

//         const test3 = () => {
//             console.log("this3", this) // user
//         };

//         test3();
//     }
// };

// user.test();
// user.test2() // this = user

// звичайна ф-ція має свій контекст, стрілочна ф-ція свого контексту немає вона його бере де її створили

// # Модуль 5. Занятие 9. Контекст вызова функции и this

// ## Example 1 - Мастерская драгоценностей

// Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// количеством из свойства `stones`.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName){
//     const {price, quantity} = this.stones.find(stone => stone.name === stoneName);
//     return price * quantity
//   }
  
// }

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600


// ## Example 2 - Телефонная книга

// Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// const phonebook = {
//   contacts: [],
//   add: (contact) =>{
//     console.log('this', this);
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// const phonebook = {
//     name: "book1",
//     contacts: [],
//     add(contact) {
//       console.log('this', this);
//       const newContact = {
//         list: "default",
//         ...contact,
//         id: this.generateId(),
//         createdAt: this.getDate(),
//       };
//       this.contacts.push(newContact);
//     },
//     generateId() {
//       return "_" + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };

//   const phonebook2 = {
//     name: "book2",
//     contacts: [],
//     // позичили метод add з обєкта phonebook
//     generateId() {
//       return "_" + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };

// function.method(context, arg1, arg2)
// методи call, apply і bind використовуються лише для звичайних ф-цій які мають свій this
// phonebook.add.call(phonebook, {
//             name: "Mango",
//             email: "mango@mail.com",
//             list: "friends",
//         })

// позичили метод add в обєкта phonebook і використали в phonebook2
    // phonebook.add.call(phonebook2,{
    //     name: "Mango",
    //     email: "mango@mail.com",
    //     list: "friends",
    // })

// call - coma
// apply - array

// console.log( 
//     phonebook.add({
//         name: "Poly",
//         email: "poly@mail.com",
//     })
// );

// console.log(phonebook)
// console.log(phonebook2)


// ## Example 3 - Калькулятор

// Создайте объект `calculator` с тремя методами:

// - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// - `add()` - возвращает сумму сохранённых значений.
// - `mult()` - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//     read(a, b){
//         this.a = a; // calculator.a = 5
//         this.b = b; // calculator.b = 10
//     },
//     add(){
//         return this.a + this.b;
//     },
//     mult(){
//         return this.a * this.b
//     }
// };

// calculator.read(4, 5);

// console.log(calculator.add());

// console.log(calculator.mult());

// console.log(calculator);

// const allCourses = students.flatMap((student) => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// course = математика
// index = 0
// array = allCourses
// allCourses.indexOf(математика) === 0
// 0 === 0 // true
// [математика]

// course = фізика
// index = 1
// array = allCourses
// allCourses.indexOf(фізика) === 1
// 1 === 1 // true
// [математика, фізика]

// course = інформатика
// index = 2
// array = allCourses
// allCourses.indexOf(інформатика) === 2
// 2 === 2 // true
// [математика, фізика, інформатика]

// course = математика
// index = 3
// array = allCourses
// allCourses.indexOf(математика) === 3
// 0 === 3 // false
// [математика, фізика, інформатика]


// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//     // getEmail() {
//     //   return this.#email;
//     // }

//   get email() {
//     return this.#email;
//   }

//   set email(value) {
//     this.#email = value;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });

// console.log(mango);
// console.log(mango.name);
// console.log(mango.email);
// mango.email = "user@gmail.com";
// console.log(mango.email);
// console.log(mango.#email);
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email);

// class User {
//     #percent

//     constructor(percent){
//         this.#percent = percent;
//     }

//     get percent(){
//         return this.#percent;
//     }
// }

// class Admin extends User {
//     #percent 

//     constructor(percent){
//         // super - щоб запустити батьківський класс
//         super();
//         this.role = 'Admin';
//     }

//     set percent(value){
//         this.#percent = value
//     }
// }

// const user = new User(20);
// console.log(user);

// const admin = new Admin(30);
// admin.percent = 40;
// console.log(admin)


// function User (name, age){
//     // this - {}
//     this.name = name;
//     this.age = age;

//     // return this
// }

// User.prototype.getName = function(){
//     return this.name;
// }

// class User{
//     constructor(name, age){
//         // this - {}
//         this.name = name;
//         this.age = age;
//         // return this
//     }

//     getName(){
//         return this.name
//     }
// }

// // class Student extends User{
// //     constructor(name, age, group){
// //         // super - конструктор батьківського класа
// //         super(name, age) // constructor з class User
// //         this.group = group;
// //     }
// // }

// const user = new User('Bob', 12);
// const user2 = new User('John', 22);
// // const student = new Student('Bogdan', 28, 'FS47');
// // console.log(student)
// console.log(user);
// console.log(user2)


// # Модуль 5. Занятие 10. Прототипы и классы

// ## Example 1 - Блоггер

// Напиши класс `Blogger` для создания обьекта блоггера со следующим свойствами:

// - `email` - почта, строка
// - `age` - возраст, число
// - `numberOfPosts` - кол-во постов, число
// - `topics` - массив тем на которых специализируется блоггер

// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод `getInfo()`, который, возвращает строку:
// `User ${почта} is ${возраст} years old and has ${кол-во постов} posts`.

// Добавь метод `updatePostCount(value)`, который в параметре `value` принимает
// количество постов которые нужно добавить пользователю.

// class User{
//     constructor({email, age, numberOfPosts, topics}){
//     // this = {} - створився контекст, пустий обьєкт який ми наповнюємо
//         this.email = email;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo(){
//         return `${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }

//     updatePostCount(value){
//         this.numberOfPosts += value;
//     }
//     // return this
// }

// const mango = new User({
//   email: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   email: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts


// ## Example 2 - Хранилище

// Напиши класс `Storage` который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать
// его в свойство `items`.

// Добавь методы класса:

// - `getItems()` - возвращает массив товаров.
// - `addItem(item)` - получает новый товар и добавляет его к текущим.
// - `removeItem(item)` - получает товар и, если он есть, удаляет его из текущих.

// class Storage{
//     constructor(items){
//         this.items = items;
//     }

//     getItems(){
//         return this.items;
//     }

//     addItem(item){
//         // пуш мутує оригінал
//         this.items.push(item);
//     }

//     removeItem(item){
//         if(!this.items.includes(item)){
//             return `${item} - товар відсутній на складі`;
//         }

//         // якщо не мутують оригінал потрібно переписати ключ на нові значення
//         this.items = this.items.filter(el => el !== item)
//     }

// }

// // // ```js
// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// console.log('addItem', storage.addItem("🍌"));
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// console.log('removeItem', storage.removeItem("🍋"));
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// ```


// ## Example 3 - User

// Напиши класс `User` который создаёт объект со свойствами `login` и `email`.
// Объяви приватные свойства `#login` и `#email`, доступ к которым сделай через
// геттер и сеттер `login` и `email`.

// class User{
//     #login
//     #email

//     constructor({login, email}){
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() { 
//         return this.#login; 
//     }

//     get email() { 
//         return this.#email; 
//     }

//     set login(value){
//         this.#login = value
//     }

//     set email(value){
//         this.#email = value
//     }
// }

// // ```js
// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie


// ## Example 4 - Заметки

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

// class Notes{
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     }

//     constructor(items){
//         this.items = items;
//     }

//     addNote(note){
//         this.items.push(note);
//     }

//     removeNote(text){
//         // повертай всі поля в яких текст не дорівнює тому тексту який я хочу видалити
//         this.items = this.items.filter(item => item.text !== text)
//     }

//     updatePriority(text, newPriority){
//         // 1 беремо масив пробігаємся мепом по ньому 
//         // 2 беремо поле текст і якщо вони рівне тому яке ми хочемо оновити
//         // 3 тоді ми хочемо створити новий обьект розпиляємо все що було в старій замітці 
//         // 4 оновити приорітет на новий який ми хочем поставити
//         // 5 якщо поля не співпадають ми просто повертаємо стару замітку 
//         this.items = this.items.map(item => item.text === text ? {...item, priority: newPriority} : item)
//     }
// }
// item.text === newText
// true
// {...item, priority: newPriority }

// const user = {
//   name: "Bob",
//   age: 15,
// };

// const user2 = {
//   ...user,
//   age: 45,
// };

// {name: 'Bob', age: 45}

// // ```js
// // {
// //   LOW: 'low',
// //   NORMAL: 'normal',
// //   HIGH: 'high'
// // }
// // ```

// // Добавь методы `addNote(note)`, `removeNote(text)` и
// // `updatePriority(text, newPriority)`.


// // ```js
// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя первая заметка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя вторая заметка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя первая заметка");
// console.log(myNotes.items);

// myNotes.updatePriority("Моя вторая заметка", Notes.Priority.HIGH);
// console.log(myNotes.items);
// // ```


// ## Example 5 - Toggle

// Напишите класс `Toggle` который принимает объект настроек `{isOpen: boolean}` и
// объявляет одно свойство `on` - состояние вкл/выкл (true/false). По умолчанию
// значение свойства `on` должно быть `false`.

// ```js
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// ```


// const user = {
//   name: "Bob",
//   age: 23,
//   getInfo(){
//     return `${this.name} and ${this.age}`;
//   }
// }


// const user2 = {
//   name: "Jack",
//   age: 35,
// };

// console.log(user.getInfo());

// // визвав метод getInfo з новим обьєктом user2
// console.log(user.getInfo.call(user2));

// // зроби копію методу getInfo але привяжи до неї новий контекст user2
// const getInfoUser2 = user.getInfo.bind(user2);
// console.log(getInfoUser2());

// // call і apply - відразу запускають ф-цію, видають результат роботи ціє ф-ції
// // bind - створює нову ф-цію з новим контекстом, але її не запускає

  
// // Об'єкти можна організувати у ланцюжки таким чином, щоб здійснювався автоматичний пошук властивості в іншому об'єкті, не знайденої в одному об'єкті. Сполучною ланкою виступає спеціальна прихована властивість [[Prototype]], яка в консолі браузера відображається як __proto__.
// const animal = {
//     legs: 4,
//   };

//   const dog = Object.create(animal);
//   dog.name = "Mango";

// console.log(dog); // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// // Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. Об'єкт, на який вказує посилання в __proto__, називається прототипом. У нашому прикладі об'єкт animal - це прототип для об'єкта dog. Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog і чи повертає true або false.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Mango'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4

// // Звернення dog.name працює очевидним чином - повертає власну властивість name об'єкта dog. Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з dog.__ proto__, тобто, у цьому випадку, в об'єкті animal - його прототипі.

// class User {
//     // Тіло класу
//   }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}
// Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

// class User {
//     // Синтаксис оголошення методу класу
//     constructor(name, email) {
//       // Ініціалізація властивостей екземпляра
//       this.name = name;
//       this.email = email;
//     }
//   }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
// Властивості name та email називаються публічними властивостями, тому що вони будуть власними властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись через крапку.

// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта. Якщо параметрів багато (більше 2-х), то, як правило, застосовують патерн «Об'єкт параметрів». Ідея цього патерну у тому, щоб передавати як параметр один об'єкт з логічно іменованими властивостями. Значення властивостей такого об'єкта замінять набір аргументів.
// class User {
//     // Деструктуризуємо об'єкт
//     constructor({ name, email }) {
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
//   });
//   console.log(mango); // { name: "Mango", email: "mango@mail.com" }

//   const poly = new User({
//     name: "Poly",
//     email: "poly@mail.com",
//   });
//   console.log(poly); // { name: "Poly", email: "poly@mail.com" }

// Для роботи з властивостями майбутнього екземпляра використовуються методи класу. Методи - це просто функції, але з однією відмінністю - вони доступні екземпляру класу.
// class User {
//     constructor({ name, email }) {
//       this.name = name;
//       this.email = email;
//     }
  
//     // Метод getEmail
//     getEmail() {
//       return this.email;
//     }
  
//     // Метод changeEmail
//     changeEmail(newEmail) {
//       this.email = newEmail;
//     }
//   }

// Інкапсуляція — це концепція, що дозволяє приховати те, як влаштований клас. Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - набору публічних властивостей і методів класу. Решта методів і властивостей (не публічних) повинні бути недоступні.
// В класах інкапсуляція реалізується приватними властивостями, доступ до яких можна отримати тільки всередині класу.
// Припустимо, що пошта користувача повинна бути недоступною для прямої зміни зовні, тобто - приватною. Додаючи до імені властивості символ #, ми робимо її приватною. Оголошення приватної властивості до ініціалізації в конструкторі - обов'язкове.
// class User {
//     // Необов'язкове оголошення публічних властивостей
//     name;
//     // Обов'язкове оголошення приватних властивостей
//     #email;
  
//     constructor({ name, email }) {
//       this.name = name;
//       this.#email = email;
//     }
  
//     getEmail() {
//       return this.#email;
//     }
  
//     changeEmail(newEmail) {
//       this.#email = newEmail;
//     }
//   }
  
//   const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
//   });
//   mango.changeEmail("mango@supermail.com");
//   console.log(mango.getEmail()); // mango@supermail.com
//   console.log(mango.#email); // Виникне помилка, це приватна властивість


// Гетери та сетери доречно використовувати для простих операцій читання і зміни значення властивостей, особливо приватних, як їх публічний інтерфейс. Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.
// class User {
//     #email;
  
//     constructor({ name, email }) {
//       this.name = name;
//       this.#email = email;
//     }
  
//     // Геттер email
//     get email() {
//       return this.#email;
//     }
  
//     // Сеттер email
//     set email(newEmail) {
//         if(newEmail === "") {
//           console.error("Помилка! Пошта не може бути порожнім рядком!");
//           return;
//         }
      
//         this.#email = newEmail;
//       }
//   }
// // Ми оголосили гетер і сетер email, поставивши перед ім'ям властивості ключові слова get і set. Всередині цих методів ми або повертаємо значення приватної властивості #email, або змінюємо її значення. Геттер і сетер застосовуються в парі та повинні називатися однаково.
// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com
// // Звертаючись до mango.email, викликається гетер get email() {...} і виконується його код. При спробі запису mango.email = "mango@supermail.com" викликається сетер set email(newEmail) {...} і рядок "mango@supermail.com" буде значенням параметра newEmail.
// // Перевага в тому, що це методи, а значить, під час запису можна виконати додатковий код, наприклад, з будь-якими перевірками, на відміну від виконання цієї ж операції безпосередньо з властивістю.

// Крім публічних і приватних властивостей майбутнього екземпляра, в класі можна оголосити його власні властивості, доступні тільки класові, але не його екземплярам - статичні властивості (static). Вони корисні для зберігання інформації, що стосується класу.
// Додамо класу користувача приватну властивість role - його роль, що визначає набір прав, наприклад, адміністратор, редактор, звичайний користувач тощо. Можливі ролі користувачів будемо зберігати як статичну властивість Roles - об'єкт з властивостями.
// Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово static.
// class User {
//     // Оголошення та ініціалізація статичної властивості
//     static Roles = {
//       ADMIN: "admin",
//       EDITOR: "editor",
//     };
  
//     #email;
//     #role;
  
//     constructor({ email, role }) {
//       this.#email = email;
//       this.#role = role;
//     }
  
//     get role() {
//       return this.#role;
//     }
  
//     set role(newRole) {
//       this.#role = newRole;
//     }
//   }
  
//   const mango = new User({
//     email: "mango@mail.com",
//     role: User.Roles.ADMIN,
//   });
  
//   console.log(mango.Roles); // undefined
//   console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }
  
//   console.log(mango.role); // "admin"
//   mango.role = User.Roles.EDITOR;
//   console.log(mango.role); // "editor"
// Статичні властивості також можуть бути приватними, тобто доступними тільки всередині класу. Для цього ім'я властивості повинно починатися з символу #, так само, як приватні властивості. Звернення до приватної статичної властивості за межами тіла класу викличе помилку.


// В класі можна оголосити не тільки методи майбутнього екземпляра, а також методи, доступні тільки класу - статичні методи, які можуть бути як публічні, так і приватні. Синтаксис оголошення аналогічний статичним властивостям, за винятком того, що значенням буде метод.
// class User {
//     static #takenEmails = [];
  
//     static isEmailTaken(email) {
//       return User.#takenEmails.includes(email);
//     }
  
//     #email;
  
//     constructor({ email }) {
//       this.#email = email;
//       User.#takenEmails.push(email);
//     }
//   }
  
//   const mango = new User({ email: "mango@mail.com" });
  
//   console.log(User.isEmailTaken("poly@mail.com"));
//   console.log(User.isEmailTaken("mango@mail.com"));
// Особливість статичних методів полягає у тому, що під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра. Логічно, тому що статичні методи викликає сам клас, а не його екземпляри.


// Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості та методи іншого класу (батьківського).
// class Child extends Parent {
//     // ...
//   }
// У виразі class Child extends Parent дочірній клас Child наслідує (розширює) від батьківського класу Parent. Це означає, що ми можемо оголосити базовий клас, який зберігає загальні характеристики і методи для групи похідних класів, які наслідують властивості і методи батьківського, але також додають свої унікальні.
// Наприклад, у застосунку є користувачі з різними ролями — адміністратор, копірайтер, контент менеджер тощо. У кожного типу користувача є набір загальних характеристик, наприклад, пошта і пароль, але також є й унікальні.
// Створивши незалежні класи для кожного типу користувача, ми отримаємо дублювання загальних властивостей і методів, і, якщо необхідно змінити, наприклад, назву властивості, доведеться проходити по усіх класах, а це незручно і вимагає багато часу.
// Замість цього, можна створити загальний клас User, який буде зберігати набір загальних властивостей і методів, після чого, створити класи для кожного типу користувача, які наслідують цей набір від класу User. За потреби змінити щось спільне, достатньо буде змінити тільки код класу User.
// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get mail() {
//       return this.email;
//     }
  
//     set mail(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class ContentEditor extends User {
//     // Тіло класу ContentEditor
//   }
  
//   const editor = new ContentEditor("mango@mail.com");
//   console.log(editor); // { email: "mango@mail.com" }
//   console.log(editor.mail); // "mango@mail.com"

// //   Клас ContentEditor наслідує від класу User його конструктор, гетер і сетер mail, а також однойменну публічну властивість. Важливо пам'ятати, що приватні властивості і методи батьківського класу не наслідуються дочірнім класом.


// Насамперед в конструкторі дочірнього класу необхідно викликати спеціальну функцію super(аргументи) - це псевдонім конструктора батьківського класу. В іншому випадку, при спробі звернутися до this в конструкторі дочірнього класу, виникне помилка. Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.
// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get mail() {
//       return this.email;
//     }
  
//     set mail(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   // class ContentEditor extends User {
//   //   constructor({ email, posts }) {
//   //     // Виклик конструктора батьківського класу User
//   //     super(email);
//   //     this.posts = posts;
//   //   }
//   // }
  
//   // const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// //   console.log(editor); // { email: 'mango@mail.com', posts: [] }
// //   console.log(editor.mail); // 'mango@mail.com'
  

// // В дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.
// // Уявімо, що вище є оголошення класу User
// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']



// const makeSheff = function(name){
//     const makeDish = function(dish){
//         console.log(`${name} готовит ${dish}`);
//     }

//     const makeSoup = function(dish){
//         console.log(`готовит ${dish}`);
//     }

//     return makeDish
//     // return {makeDish, makeSoup} // function(dish){
//     // //     console.log(`${name} готовит ${dish}`);
//     // // }
// }

// // Якщо ф-ція повертає іншу ф-цію, ми можемо до результата роботи визвати круглі дужки і це вже буде запуск тої ф-ції яку ми заретарнели
// const mango = makeSheff("Mango")("пирожок"); // Mango scope + Global scope = Lexical enviroment => словник
// // name = Mango
// // makeDish = function
// // mango.makeDish("Пирожок");
// // mango.makeSoup("котлети")

// const poly = makeSheff("Poly") // Poly scope + Global scope = Lexical enviroment => словник
// // name = Poly
// // makeDish = function
// console.log(poly);
// poly("чай");
// poly("кава")


// function showThis(){
//     // this - є контекст
//     console.log(this) // undefined
// }

// // контекст визначається в момент її створення
// const arrow = () => {
//     // this - відсутній
//     console.log(this) // undefined
// }

// контекст визначається в момент її запуску
// showThis()
// arrow()

// const user = {
//     name: "Bob",
//     age: 20,
//     showThis(){
//         console.log(this)
//     },
//     // в якому контексті зберігається ця ф-ція? Обьєкт свого контексту немає
//     arrow: () => {
//         console.log(this) 
//     }
// }

// const user = {
//     name: "Bob",
//     age: 20,
//     showThis(){
//         console.log(this); // this = user

//     // в якому контексті зберігається ця ф-ція? бере контекст ф-ції showThis
//     const arrow = () => {
//         console.log(this) 
//     }
//     arrow()
//     },

// }

// // хто ф-цію включив? 
// user.showThis();  // user
// user.arrow();  // undefined


// // Callback - це ф-ція яка передається в іншу ф-цію у вигляді аргументу
// const numbers = [1, 2, 3, 4, 5]

// // метод map вміє перебирати масив
// numbers.map(function(number){
//     return number - 10;
// })
// numbers.map( number => number * 2 );


// не для строгого режима
// const arr = ["one", "two", "three"];

// arr.forEach((el) => {
//     console.log('this', this[el])
//     return this[el] = (a) => console.log(a)
// }
// );

// one("abc")


// рекурсія
// power(5, 3)
// function power(base, exponent) {
//   if (exponent == 0)
//     return 1;
//   else
//     return base * power(base, exponent - 1);
// }

// const numbers = [1, 2, 3, 4, 5];

// // const numbers = undefined;

// // if(numbers){
// // // коли ми отримуємо дані з бекенда з затримкою
// // console.log(numbers.map(number => number * 2))
// // }

// // коли ми отримуємо дані з бекенда з затримкою
// console.log(numbers?.map(number => number * 2))

// const adventurer = {
//     name: 'Alice',
//     cat: {
//       name: 'Dinah'
//     }
//   };
  
//   // зайди в обьєкт adventurer знайти поле dog якщо воно буде існувати взяти в нього name
//   const dogName = adventurer.dog?.name;
//   console.log(dogName);
//   // Expected output: undefined

//   console.log(adventurer.someNonExistentMethod?.());
// // Expected output: undefined
