// результат виразу
// console.log(true && 4 && 'kiwi'); // kiwi
// console.log(true && 0 && 'kiwi'); // 0
// console.log(true || false || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0) // null > 0 // false
// console.log(null || (2 && 3) || 4) // null || 3 || 4 // 3

// const a = [1, 2, 3];

// // a.push() - добавити елементи в кінець масива
// const result = a.push(4, 5, 6, 7);

// console.log(a);
// console.log(result); // return a.length // 7

// // a.pop() - видалити останній елемент в массиві
// const del = a.pop();

// console.log(a);
// console.log(del); // return 7

// a.push(del);

// console.log(a);

// // # Модуль 2. Занятие 3. Массивы

// // ## Example 1 - Базовые операции с массивом

// // 1. Создайте массив `genres` с элементами «Jazz» и «Blues».
// // 2. Добавьте «Рок-н-ролл» в конец.
// // 3. Выведите в консоль первый элемент массива.
// // 4. Выведите в консоль последний элемент массива. Код должен работать для массива
// //    произвольной длины.
// // 5. Удалите первый элемент и выведите его в консоль.
// // 6. Вставьте «Country» и «Reggy» в начало массива.

// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-ролл");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]); // length = 3 // lastIndex = 2
// console.log(genres.shift());
// console.log(genres)
// genres.unshift("Country", "Reggy");
// console.log(genres);

// // ## Example 2 - Массивы и строки

// // Напиши скрипт для вычисления площади прямоугольника со сторонами, значения
// // которых хранятся в переменной `values` в виде строки. Значения гарантированно
// // разделены пробелом.

// const values = "8 11";
// console.log(values);
// const numbers = values.split(" ");
// console.log(numbers)
// // const result = numbers[0] * numbers[1];

// // при додаванні дві строками обєднує в одну
// const result = numbers[0] + numbers[1];
// конвертуємо строку в числа
// // const result = Number(numbers[0]) + Number(numbers[1]);
// console.log(result)

// // ## Example 3 - Перебор массива

// // Напиши скрипт для перебора массива `fruits` циклом `for`. Для каждого элемента
// // массива выведи в консоль строку в формате `номер_элемента: значение_элемента`.
// // Нумерация элементов должна начинаться с `1`.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for(let i=0; i < fruits.length; i+=1){
//     const index = i + 1;
//     const element = fruits[i];
//     console.log(`${index}: ${element}`);
// }

// for(const fruit of fruits){
//     const index = fruits.indexOf(fruit) + 1;
//     console.log(`${index}: ${fruit}`);
// }

// // ## Example 4 - Массивы и циклы

// // Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В
// // переменных `names` и `phones` хранятся строки имен и телефонных номеров,
// // разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на
// // соответствие. Количество имен и телефонов гарантированно одинаковое.

// // Опрацювати варіант коли довжина строк різна

// const names = "Jacob,William,Solomon,Artemis";
// const names = "Jacob,William,Solomon";

// const phones = "89001234567,89001112233,890055566377,890055566300";

// const names = "Jacob,William,Solomon,Artemis";

// const phones = "89001234567,89001112233,890055566377";

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');

// let longestArray = (namesArray.length > phonesArray.length) ? namesArray : phonesArray;
// console.log(longestArray);

// for(let i = 0; i < longestArray.length; i += 1){
//     const names = namesArray[i] === undefined ? 'no name' : namesArray[i];// //   // iteration #1
//   // i = 0
//   // const name = namesArray[0]
//   // const name = 'Jacob' === undefined // false
//   // const name = namesArray[0] // Jacob;

//   // Iteration #4
//   // i = 3
//   // const name = namesArray[3]
//   // const name = undefined === undefined // true
//   // const name = 'no name'
//     const phone = phonesArray[i] === undefined ? 'no phone' : phonesArray[i];

//     console.log(`${names} - ${phone}`);
// }

// // ## Example 5 - Массивы и строки

// Напиши скрипт который выводит в консоль все слова строки кроме первого и
// последнего. Результирующая строка не должна начинаться или заканчиваться
// пробельным символом. Скрипт должен работать для любой строки.

// const string = "Welcome to the future";
// const array = string.split(' ');
// console.log(array);
// // shift, pop
// const copyArray = array.slice();
// copyArray.shift();
// copyArray.pop();
// const res = copyArray.join(" ");
// console.log(copyArray);
// console.log(res);

// splice - робим копію массива
// const copyArray = array.slice();

// // звідки, скільки, і що на його місце поставити якщо потрібно
// copyArray.splice(0, 1);
// copyArray.splice(copyArray.length - 1, 1);
// const res = copyArray.join(" ");
// console.log(res);


// function tasks
// // Lesson 4

// function calculate(a, b) {
//   function add(a, b) {
//     console.log(a + b);
//     return a + b;
//   }

//   add(a, b);
// }

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// calculate(10, 15);

// sayHello("John");


// Array.from(arguments)

// function add() {
// //   console.log(arguments);
//   const args = Array.from(arguments);
// //   console.log(args);
//   const numbers = [];
//   const strings = [];
//   for (let arg of args) {
//     if (typeof arg === "number") {
//       numbers.push(arg);
//     }

//     if (typeof arg === "string") {
//       strings.push(arg);
//     }
//   }
//   console.log(numbers);
//   console.log(strings);
// }

// add("2", "3", "4", 4, 5);
// add("2", "3", 4, 4, 5);
// add(2, 5);


// ## Example 2 - Меньшее из чисел

// Напиши функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// console.log(min(1, 1, 0)); // 0
// console.log(min(54, 37, 20)); // 37

// function min(a, b){
//     // if(a < b){
//     //     return a;
//     // }

//     // return b;
//     return a < b ? a : b;
// }

// [1, 2, 0];
// min = 54
// 54 < 54 // false
// min = 54
// 37 < 54 // true
// min = 54 => 37
// 20 < 37 // true
// min = 37 => 20

// function min() {
//   const args = Array.from(arguments);
//   let min = args[0];
//   for (let number of args) {
//     if (number < min) {
//       min = number; // меняем минимальное значение
//     }
//   }
//   return min;
// }


// ## Example 3 - Площадь прямоугольника

// Напиши функцию `getRectArea(dimensions)` для вычисления площади прямоугольника
// со сторонами, значения которых будут переданы в параметр `dimensions` в виде
// строки. Значения гарантированно разделены пробелом.

// function getRectArea(width, height){
//     if(isNaN(width) || isNaN(height)){
//         return("Введіть два числа");
        
//     }
    
//     if(width === null || height === null){
//         return("Не коректні дані");
//     }

//     return width * height;
// }

// const width = prompt('Enter width');
// const height = prompt('Enter height');

// console.log(getRectArea(width, height))

// ## Example 7 - Среднее значение

// Напишите функцию `calAverage()` которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение. Все аругменты будут только числами.
// 1 Щоб знайти суму елементів нам потрібно взяти і кожин елемент масива додати
// 2 І суму поділити на к-сть елементів, це довжина масива

// function calAverage(...args){
//     // const args = Array.from(arguments);
//     // const numbersCount = args.length;

//     let sum = 0;

//     for(const arg of args){
//         sum += arg;
//     }
//     return sum / args.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2


// ## Example 8 - Форматирование времени

// Напиши функцию `formatTime(minutes)` которая переведёт значение `minutes`
// (количество минут) в строку в формате часов и минут `HH:MM`.

// function formatTime(minutes){
//     const hours = Math.floor(minutes / 60); // 1 год
//     const minutesLeft = minutes % 60;
//     const convertedHours = hours < 10 ? `0${hours}` : hours;
//     const convertedMinutes = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
//     console.log(`${convertedHours}:${convertedMinutes}`);
// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));




// Тобто запис Math.max (... [14, -4, 25, 8, 11]), після інтерпретації перетворюється у Math.max (14, -4, 25, 8, 11) - синтаксис ... повертає розпакований масив, тобто розподіляє його елементи у якості окремих аргументів.
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


//  Операція rest збирає решту усіх аргументів, а тому повинна бути останньою у підписі функції, інакше виникне помилка.
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber); // Значення першого аргументу
//     console.log(secondNumber); // Значення другого аргументу
//     console.log(otherArgs); // Масив інших аргументів
//   }
  
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);




const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
        for(const potion of this.potions){
            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }

  
      this.potions.push(newPotion);
    },
    removePotion(potionName) {
      let potionIndex = -1;

      for(let i = 0; i < this.potions.length; i += 1){  
        if(this.potions[i].name === potionName){
            potionIndex = this.potions.indexOf(this.potions[i]);
            console.log(potionIndex)
        }
      }
  
      if (potionIndex === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        let potionIndex = -1;
    for(const potion of this.potions){
        if(potion.name === oldName){
            potionIndex = this.potions.indexOf(potion);
            console.log(potionIndex)
        }
    }
      
  
      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1, {...this.potions[potionIndex], name:newName } );
    },
    // Change code above this line
  };

  
//   console.log(atTheOldToad.getPotions())
//   console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
//   console.log(atTheOldToad.getPotions())
//   console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))
//   console.log(atTheOldToad.getPotions())
//   console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))
//   console.log(atTheOldToad.removePotion("Dragon breath"))
  console.log(atTheOldToad.getPotions())
  console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
  console.log(atTheOldToad.getPotions());





// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       for (let potion of this.potions) {
//         if (potion.name.includes(newPotion.name)) {
//           return `Error! Potion ${newPotion.name} is already in your inventory!`;
//         }
//       }
  
//       this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       const indx = [];
//       for (let {name} of this.potions) {
//         indx.push(name);
//       }
  
//       const potionIndex = indx.indexOf(potionName);
//       console.log(potionIndex);
  
//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }
  
//       this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
  
//      const { potions } = this;
  
//       for (let i = 0; i < potions.length; i += 1){
//         const {name} = this.potions[i];
  
//         if (oldName === name) {
  
//           potions[i].name = newName;
//         } 
  
        
//       }
  
//       // const potionIndex = this.potions.indexOf(oldName);
  
//       // if (potionIndex === -1) {
//       //   return `Potion ${oldName} is not in inventory!`;
//       // }
  
//       // this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
//   };
  
//   // console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));
  
//   // console.log(atTheOldToad.getPotions());
  
//   console.log(atTheOldToad.removePotion('Dragon breath'));
  
//   console.log(atTheOldToad.getPotions());