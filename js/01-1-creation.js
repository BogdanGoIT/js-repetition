/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// // 1 операция присваевания
// const x = {}

// // 2 при передачи ф-ции
// console.log({});

// // function log(message){
// //     // message = {}
// // }

// // 3 когда вы что-то возвращаете из ф-ции
// const rtfm = function(){
//     return {a: 5};
// }
// console.log(rtfm());


/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

// Обьект - это возможность сгрупировать х-стики одной сущности(пользователь,библиотека, корзина товаров)
const playlist = {
    name: "Мой плейлист",
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
};

// // В обьекты после их создания можно добавлять элименты
// playlist.qwe = 5;

// // Если свойство уже таке есть то его значения будет переписано
// playlist.rating = 10;

// // // ключ свойства всегда строка
// console.log(playlist)

// // console.log(playlist.tracks);
// // console.log(playlist.name);
// // console.log(playlist.trackCount);

// // имя свойства хранится в переменной
// const propertyName = 'tracks';

// // пойдет в обьект плейлист и попытается найти свойство .propertyName
// console.log(playlist.propertyName);

// // сначала идет находит переменную propertyName находит её значение 'tracks' подставляет его, а потом уже в обьекте playlist ищет свойство с именем tracks
// console.log(playlist[propertyName])

/*
 * Короткая запись свойств
 */
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
    // имя переменной используеться как свойство, а значение как значение свойства
    username,
    email,
}

// console.log(signupData)

/*
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    // значение переменной inputName станет ключем
    [inputName]: inputValue,
}

// console.log(colorPickerData);


/*
 * Ссылочный тип {} === {}
 */

// console.log({a: 1} === {a: 1});
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// // в обьект a добавь свойство с и присвой ему 100
// a.c = 100;

// console.log(a);
// console.log(b);


/*
 * Массивы и функции это объекты
 */

// const a = [1, 2, 3];

// a.hello = ":)"

// console.log(a)

// const fn = function(){
//     console.log('hello')
// }

// fn.hello = ':)'

// console.dir(fn.hello)

const a = [1, 2, 3];

// push - это имя свойства в котором лежит ф-ция, которая что-то с этим масивом умеет делать
a.push(4)

console.log(a);