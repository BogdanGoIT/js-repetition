/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const firiends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// // console.table - для массивов
// console.table(firiends);

// console.log(['Mango', 'Kiwi', 'Poly', 'Ajax'][2]);

// // изминение места в памяти кусочка массива
// firiends[1] = 'qweewqewe';
// firiends[3] = 1235464;
// console.table(firiends);

// const lastIndex = firiends.length - 1;
// console.log(lastIndex);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// передача по значению
// let a = 10;
// let b = a;

// console.log(a); // 10
// console.log(b); // 10

// a = 20;

// console.log(a); // 20
// console.log(b); // 10

// // передача по ссылке
// const a = [1, 2, 3]; //в переменной a - хранится указатель на массив
// const b = a; // в переменную b копируеться указатель на массив

// console.log('a', a); // [1, 2, 3]
// console.log('b', b); // [1, 2, 3]

// a[0] = 500;

// console.log('a', a); // [500, 2, 3]
// console.log('b', b); // [500, 2, 3]

// console.log(a === b)

// // не равны - это две разные ячейки в памяти
// console.log([1,2,3] === [1,2,3]);

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);

// const lastIndex = friends.length - 1;

for(let i = 0; i < friends.length; i+=1){
   friends[i] += `-${i}`; // += это присвоение с добавлением
}

// for(let friend of friends){
//     // friend = friend[i] - вы просто изменяете локальную переменную friend
//     friend += '-1';
// }

console.table(friends)