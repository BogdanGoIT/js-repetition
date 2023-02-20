// Конструкція if...else може перевірити і зреагувати на виконання або невиконання лише однієї умови.

// Блок else...if дозволяє додати після else ще один оператор if з умовою. В кінці ланцюжка може бути класичний блок else, який виконається лише у тому випадку, якщо жодна умова не приведеться до true.

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost); // 500


// Тернарний оператор використовується у якості синтаксично коротшої заміни інструкції if...else, коли одній і тій самій змінній необхідно присвоїти різні значення за умовою.

// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

// Працює за наступною схемою:

// Обчислюється умова.
// Якщо умова правдива, тобто приводиться до true, обчислюється вираз після ?.
// Якщо умова хибна, тобто приводиться до false, обчислюється вираз після :.
// Значення обчисленого виразу повертається у якості результату роботи тернарного оператора.

// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"

// Виконаємо рефакторинг, замінивши if...else на тернарний оператор.

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"

// Запишемо операцію пошуку більшого числа.

const num1 = 5;
const num2 = 10;
const biggerNumber = num1 > num2 ? num1 : num2;

console.log(biggerNumber); // 10

// Тернарний оператор повинен використовуватися у простих операціях присвоєння або повернення

// Його синтаксис складається із блоку switch(значення) - що потрібно порівняти і набору окремих випадків case значення - з чим потрібно порівняти. Для порівняння використовується оператор строгої рівності ===. Тобто, не можна порівняти більше або менше, лише рівність.

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }


let costCase;
const subscr = "pro";

switch (subscr) {
  case "free":
    costCase = 0;
    break;

  case "pro":
    costCase = 100;
    break;

  case "premium":
    costCase = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(costCase); // 500

// Область видимості змінних (variable scope) - доступність змінних в певному місці коду.

// Наприклад, змінна value оголошена у глобальній області видимості, тобто поза будь-яким блоком, і доступна в будь-якому місці після оголошення.

const value = 5;

if (true) {
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // 5

// Будь-яка конструкція, яка використовує фігурні дужки {} (умови, цикли, функції тощо), створює нову локальну область видимості, і змінні, оголошені в цій області видимості, з використанням let або const, - недоступні за межами цього блоку.

if (true) {
  const valueIf = 5;
  console.log("Block scope: ", valueIf); // 5
}

// console.log("Global scope: ", valueIf); // ReferenceError: value is not defined

// Будьте уважні у разі використання блочних областей видимості і змінних, оголошених в них. Саме ця помилка, разом із неуважністю, часто стають головним болем для початківця.

// Часте завдання програмування - багаторазове виконання однотипної дії. Наприклад, вивести клієнтів зі списку один за одним, або перебрати суми зарплат, і для кожної виконати однаковий код. Саме для таких цілей - багаторазового повторення однієї частини коду, використовуються цикли.

// Цикл з передумовою — цикл, який виконується, доки правдива якась умова, зазначена до його початку. Ця умова перевіряється до виконання тіла циклу, тому тіло може не виконатися жодного разу, якщо умова від самого початку - хибна.

// while (condition) {
//   // код, тіло циклу (statement)
// }

// Конструкція while створює цикл, який виконує блок коду, доки умова перевірки оцінюється як true.

// condition, тобто умова, оцінюється перед кожною ітерацією циклу.
// Якщо condition оцінюється як true, оператор while виконує statement.
// Якщо condition оцінюється як false, виконання циклу переривається і скрипт продовжує виконувати інструкції після циклу while.

// Створимо лічильник.

let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}

// Будемо заповнювати місця в готелі доти, доки поточна кількість клієнтів не буде дорівнювати максимально можливій.

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

// Цикл з постумовою - цикл, в якому умова перевіряється після виконання тіла циклу. З цього випливає, що тіло завжди виконується хоча б один раз.

// do {
//   // statement
// } while (condition);

// Конструкція do...while створює цикл, який виконує блок коду доти, доки condition не поверне false.

// На відміну від циклу while, цикл do...while завжди виконує statement мінімум один раз, перш ніж він оцінить condition.

let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);


// Цикл з лічильником - цикл, в якому певна змінна змінює своє значення із заданого початкового до кінцевого значення з деяким кроком, і для кожного значення цієї змінної тіло циклу виконується один раз.

// for (initialization; condition; post-expression) {
//   // statements
// }

// Ініціалізація (initialization) - виконується один раз до початку циклу. Використовується для створення змінної-лічильника і зазначення її початкового значення.
// Умова (condition) - вираз, що оцінюється перед кожною ітерацією (повторенням) циклу. Тіло циклу виконується тільки тоді, коли вираз приводиться до true. Цикл завершується, якщо значення буде false.
// Тіло (statements) - набір інструкцій для виконання на кожному повторенні. Виконується, якщо вираз умови приводиться до true.
// Пост-вираз (post-expression) - виконується в кінці кожного повторення циклу, до перевірки умови. Використовується для оновлення змінної-лічильника.

// Змінні-лічильники, за традицією, називаються літерами i, j і k.

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

// Порахуємо суму чисел до певного значення.

const target = 3;
let summa = 0;

for (let j = 0; j <= target; j += 1) {
    summa += j;
    // 0 + 1
    // 1 + 2
    // 3 + 3
}

console.log(summa);

// Згадаємо про операцію a % b і виведемо остачу від ділення за допомогою циклу.

const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

// Перервати виконання циклу можна в будь-який момент. Для цього існує оператор break, який повністю припиняє виконання циклу і передає управління на рядок після його тіла.

// Знайдемо число 3. Щойно виконається умова if, цикл припинить своє виконання (буде перерваний).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Знайшли число 3, перериваємо виконання циклу");
    break;
  }
}

console.log("Лог після циклу");


// Перериває не увесь цикл, а тільки виконання поточної ітерації. Його використовують, якщо зрозуміло, що на поточній ітерації циклу більше немає що робити або взагалі не потрібно нічого робити, і час переходити до наступної ітерації.

// Використовуємо цикл для введення тільки непарних чисел. Для парних i спрацьовує continue, виконання тіла припиняється і управління передається до наступної ітерації.

const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
}