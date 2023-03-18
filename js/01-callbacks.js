/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// ф-ция это просто значение в js, а это значит что мы можем передавать как аргумент в другую ф-цию

// // Ф-ция высшего порядка - функция которая принимает другую функцию как параметр
// const fnA = function(message, callback){
//     console.log(message);

//     console.log(callback);

//     // вызов ф-ции fnB передаем аргументы
//     callback(100)
// };


// // callback - ф-ция обратного вызова
// const fnB = function(number){
//     console.log('Это лог при вызове fnB', number)
// }

// // при вызове fnA в callback лежит ссылка на ф-цию fnB
// fnA('qwewqeq', fnB);

/*
 * функция doMath(a, b, callback)
 */

const doMath = function (a, b, callback) {
    const result = callback(a, b)

    console.log(result);
}

// в переменные мы записываем ф-ции когда мыхотим их использовать много раз
// const add = function(x, y){
//     return x + y;
// }

// const sub = function(x, y){
//     return x - y;
// }

// // 3-й аргумент это инлайн ф-ция( одноразовая ф-ция )
// doMath(2, 3, function(x, y){
//         return x + y;
//     });
// doMath(10, 8, sub);

/*
 * Отложенный вызов: регистрация событий
 */

// ссылка на элимент нашего HTML
const buttonRef = document.querySelector('.js-button');

console.dir(buttonRef);

const handleBtnClick = function(){
    console.log('Клик по кнопке', Date.now());
}

// добавить слушателя события 1-й аргумент событие, 2-й ф-цию которую я буду выполнять каждый раз когда происходит это событие
buttonRef.addEventListener('click', handleBtnClick);

// где то там под капотом
// function addEventListener(eventType, callback){
//     // если
//     if(eventType == event){
//         callback()
//     }
// }


/*
 * Отложенный вызов: геолокация
 */

const onGetPositionSuccess = function (position) {
    console.log('Это вызов onGetPositionSuccess');
    console.log(position);
};

const onGetPositionError = function (error) {
    console.log('Это вызов onGetPositionError');
    console.log(error);
};

// // если хорошо вызову 1-ю ф-цию, если плохо вызову 2-ю ф-цию
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess, 
//     onGetPositionError
// );

// под капотом
// function getCurrentPosition(onSuccess, onError){
//     if(true){
//         onSuccess({все ок})
//     }else{
//         onError({Обькт ошибки})
//     }
// }

/*
 * Отложенный вызов: интервалы
 */
const callback = function(){
    console.log('Через 2 секунды внутри колбека в таймауте');
}

// console.log('В коде перед таймаутом');

// // регистрирует отложенный вызов callback, через 2 сек вызови ф-цию 
// setTimeout(callback, 2000);
// console.log('В коде после таймаута');

/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

// 2 эта ф-ция вызывается и ей передаеться ответ от бекэнда
const onRequestSuccess = function(response){
    console.log(
        'Вызов функции onRequestSuccess после успешного ответа бекенда',
    );
    console.log(response);
}

// 1 запустил запрос на бекенд, когда ты вернешся с бекэнда вызови ф-цию onRequestSuccess
// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);


// Сделай свою ф-цию и дай мне её, я эту ф-цию вызову и в неё прокину результат своей работы


/*
 * Фильтр
 */

const filter = function(array, test){

    const filteredArray = [];

    for(const el of array){
        console.log(el);
        const passed = test(el);

        if(passed){
            filteredArray.push(el);
        }
    }

    return filteredArray;
}

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function(value){
    return value >= 3
}


console.log(filter([1,2,3,4,5], callback1));

const r2 = filter([1,2,3,4,5,6,7,8], function(value){
    return value <= 4
})
console.log(r2);

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const r3 = filter(fruits, function(fruit){
    return fruit.quantity >= 120
})
console.log(r3);


