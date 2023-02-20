// на початку js-файлу. Завжди пишіть код в суворому режимі
"use strict";


// властивості: зріст, вага, колір очей, тобто якісь описові характеристики
"JavaScript is awesome".length

// метод - Це виклик дії, наприклад присісти або плавати, тобто якась активна операція
"JavaScript is awesome".toUpperCase();


// Змінну можна уявити у вигляді коробки з назвою, в якій щось лежить (значення).
// <ключове_слово> <ім`я_змінної> = <значення>

// # ❌ Погано
// chislo
// korzina_tovarov
// profil_polzovatelya
// tekushiy_mesyaz

// # ✅ Добре
// number
// cart
// userProfile
// currentMonth

// Використання camelCase-нотації для ідентифікаторів - це стандарт

// Змінні, оголошені як const, обов'язково повинні бути ініціалізовані
// значенням під час оголошення, інакше виникне помилка.
const yearOfBirth = 2006;
console.log(yearOfBirth); // 2006

// Якщо зміна оголошена як const, перезаписати її значення не можна.
// При спробі присвоїти нове значення, виникне помилка виконання скрипту.
// yearOfBirth = 2020; // ❌ Неправильно, виникне помилка


// Змінним, оголошеним через let, не обов'язково одразу присвоювати значення.
let age;

// Якщо змінній, оголошеній як let, не було присвоєно значення,
// вона ініціалізується спеціальним значенням undefined (не визначено).
console.log(age); // undefined

// console.log() - це метод для виведення даних у консоль браузера,
// пізніше познайомимось з ним детальніше.

// Якщо змінна оголошена як let, її значення можна перезаписати.
age = 14;
console.log(age); // 14

// Використовуйте const за замовчуванням, більшість змінних будуть оголошені саме таким чином.
// Використовуйте let, якщо необхідно присвоїти змінній інше значення під час виконання скрипту.



// Імена КОНСТАНТ - змінних, значення яких не змінюється ніколи впродовж роботи всього скрипту, як правило, записуються у форматі UPPER_SNAKE_CASE.

// Константа, що зберігає значення кольору
const COLOR_TEAL = "#009688";

// Константа, що зберігає повідомлення про результат логіну
const LOGIN_SUCCESS_MESSAGE = "Ласкаво просимо!";


// Невизначена (undefined) - це змінна, яка була оголошена ключовим словом let, але не ініціалізована значенням. За замовчуванням їй присвоюється початкове значення undefined.

let username;
console.log(username); // undefined


// Неоголошена (undeclared або not defined) - це змінна, яка не була оголошена в доступній області видимості. Спроба звернутися до змінної до її оголошення призведе до помилки. Наприклад, щоб прочитати або змінити її значення.

// ❌ Неправильно, буде помилка
// height = 15; // ReferenceError: Cannot access 'height' before initialization
// console.log(height); // ReferenceError: height is not defined

// Оголошення змінної height
let height = 20;

// ✅ Правильно, звертаємось після оголошення
height = 25;
console.log(height); // 25


// Number - цілі числа і числа з плаваючою комою (крапкою).

const weight = 20;
const points = 15.8;


// String - рядки, послідовність з нуля або більше символів. Рядок починається і закінчується одинарними ', або подвійними лапками ".

const user = 'Mango';
const description = "JavaSript для початківців";

// Boolean - логічний тип даних, прапорці стану. Всього два значення: true і false. Наприклад, на запитання чи увімкнено світло в кімнаті, можна відповісти так (true) або ні (false).

// true — так, вірно, істина, 1
// false — ні, невірно, неправда, 0

const isLoggedIn = true;
const canMerge = false;
const hasChildren = true;
const isModalOpen = false;

// null - особливе значення, яке по суті означає ніщо. Використовується в тих ситуаціях, коли необхідно явно вказати порожнечу. Наприклад, якщо користувач нічого не вибрав, то можна сказати що значення null.

let selectedProduct = null;


// Оператор typeof - повертає на місце свого виклику тип значення змінної, вказаного після нього - рядок, в якому вказано тип.

let name;
console.log(typeof name); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"

// confirm() - виводить модальне вікно з повідомленням, і дві кнопки, Ok і Cancel. Натискаючи на Ok, результатом будет true, натискаючи на Cancel - повертається false.

// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);

// prompt() - виводить модальне вікно з полем введення і кнопками Ok і Cancel. Натискаючи на Ok, результатом буде те, що ввів користувач, у випадку Cancel - повертається null.

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.
const hotelName = prompt("Please enter desired hotel name");
console.log(hotelName);

// Важлива особливість prompt полягає в тому, що незалежно від того, що ввів користувач, завжди повернеться рядок. Тобто, якщо користувач ввів 5, то повернеться не число 5, а рядок "5".

const value = prompt("Please enter a number!");
console.log(typeof value); // "string"
console.log(value); // "5"


// Математичні оператори
const x = 10;
const y = 5;

// Додавання
console.log(x + y); // 15

// Віднімання
console.log(x - y); // 5

// Множення
console.log(x * y); // 50

// Ділення
console.log(x / y); // 2

// Остача від ділення
console.log(x % y); // 0

// Додавання із заміною (також є для всіх інших операторів)
let val = 5;

// Аналогічно запису val = val + 10;
val += 10;
console.log(val); // 15


// використовуються тільки оператори === (строга рівність) і !== (строга нерівність), які не виконують приведення типів операндів.

// ✅ Добре, приведення типів не виконується
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

// явне приведення до числа. Якщо значення привести до числа неможливо, результатом буде спеціальне числове значення NaN (Not a Number)
const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"


// Метод Number.parseInt() парсить з рядка ціле число.

console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN


// Метод Number.parseFloat() парсить з рядка дробове число.

console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

// Для перевірки на число можна використовувати метод Number.isNaN(val). Він перевіряє, чи вказане значення є NaN. Метод відповідає на запитання "Це Not A Number?" і повертає:

// true - якщо значення val - NaN
// false - якщо значення val - не NaN

const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

// Match

// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.random()); // випадкове число між 0 і 1
console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10


// Рядок - це індексований набір з нуля або більше символів, взятих в одинарні або подвійні лапки.

// Важливо пам'ятати, що індексація елементів рядка починається з нуля. Наприклад, в рядку "JavaScript" літера "J" стоїть на позиції з індексом 0, а "t" - під індексом 9.

// Вміст рядка не можна змінити, лише прочитати. Тобто, не можна взяти будь-який символ і замінити його, як тільки рядок створений - він такий назавжди. Можна лише створити повністю новий рядок і присвоїти у змінну замість старого.


// Конкатенація рядків
// Якщо застосувати оператор + до рядка і будь-якого іншого типу даних, результатом операції «додавання» буде рядок. Ця операція називається конкатенація, або додавання рядків.

const mess = "Mango " + "is" + " happy";
console.log(mess); // Mango is happy

// Подивимось на різний порядок операндів.

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

// Шаблонні рядки - це альтернатива конкатенації зі зручнішим синтаксисом. Шаблонний рядок береться у зворотні (косі) лапки, замість подвійних або одинарних, і може містити заповнювачі місця, які позначаються знаком долара і фігурними дужками - ${вираз}.

const guestName = "Манго";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"


// Властивості і методи

// Властивість length
const me = "Welcome to Bahamas!";
console.log(me.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47

// Методи toLowerCase() і toUpperCase()
// Повертають новий рядок у відповідному регістрі, не змінюючи оригінальний рядок.

const msg = "Welcome to Bahamas!";
console.log(msg.toLowerCase()); // "welcome to bahamas!"
console.log(msg.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(msg); // "Welcome to Bahamas!"


// Щоб не вимагати абсолютно точне введення, можна зробити «нормалізацію» введеного користувачем рядка, тобто перетворити всі його символи у верхній або нижній регістр. Методи рядка toLowerCase() і toUpperCase() повернуть новий рядок у відповідному регістрі, не змінюючи оригінальний.
const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// Метод indexOf()
// Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.
const mg = "Welcome to Bahamas!";
console.log(mg.indexOf("to")); // 8
console.log(mg.indexOf("hello")); // -1

// Метод includes()
// Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку. Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".
const productName = "Ремонтний дроїд";

console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроїд")); // true
console.log(productName.includes("Дроїд")); // false
console.log(productName.includes("Ремонтний")); // true
console.log(productName.includes("ремонтний")); // false


// Метод endsWith()
// Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false


// Методи replace() і replaceAll()
// Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.
const jSFileName = "script.js";
const minifiedJsFileName = jSFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"


// Метод slice()
// Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.
const productNam = "Repair droid";
console.log(productNam.slice(0, 4)); // "Repa"
console.log(productNam.slice(3, 9)); // "air dr"
console.log(productNam.slice(0, productNam.length)); // "Repair droid"
console.log(productNam.slice(7, productNam.length)); // "droid"

// Приведення типів
// Запам'ятайте 6 хибних (falsy) значень, що приводяться до false у логічному перетворенні: 0, NaN, null, undefined, порожній рядок і false. Абсолютно все інше приводиться до true.

// Логічні оператори
// Оператор && приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до false, і правий - в інших випадках.

// Тобто, логічне «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.
console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ""
console.log("Mango" && ""); // true && false -> ""
console.log("Mango" && "Poly"); // true && true -> "Poly"
console.log("Poly" && "Mango"); // true && true -> "Mango"


// Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до true, і правий - в інших випадках.

// Тобто, логічне «АБО» зупиняється на правді і повертає те, на чому зупинилося або останній операнд.
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true


// Всі оператори, які ми розглядали до цього, були бінарними - містять два операнди: лівий і правий. Логічне «НЕ» - це унарний оператор, який виконує операцію над одним операндом з правої сторони.

// Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - змінює його на протилежний true -> false або false -> true.

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false


// Example 6 - Метод строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограмах на квадрат высоты человека в метрах.

// Вес и высота хранится в переменных `weight` и `height`, но не как числа а в виде строк. Нецелые числа могуд быть заданы в виде `24.7` или `24,7`, тоесть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// js
let weigt = "69,3";
let haigt = "1.73";

// let convertWeigt = parseFloat(weigt);
// let convertHeigt = parseFloat(haigt);

// console.log(convertWeigt);
// console.log(convertHeigt);

// const bmi = convertWeigt / Math.pow(convertHeigt, 2);
// console.log(bmi); // 23.05

// 1) знайти порядковий номер коми в рядочку (indexOf)
// 2) відділити число від коми (slice)
// 3) отримати значення після коми (slice)
// 4) зробити правильне дробове значення (template string)
// 5) можемо користуватися результатом

const index = weigt.indexOf(",");
console.log(index);

const weigtWithoutComma = weigt.slice(0, index); // 69
const weigtAfterComma = weigt.slice(index + 1);  // 3

const newWeigt = `${weigtWithoutComma}.${weigtAfterComma}`;
console.log(newWeigt);

const bmi = newWeigt / Math.pow(haigt, 2);
console.log(bmi); // 23.15

