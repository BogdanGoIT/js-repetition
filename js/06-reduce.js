/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

const numbers = [5, 10, 15, 20, 25];

// reduce() - берет много, из этого много делает что то одно

// 1 первым аргументом вы передаете ф-цию, которая будет вызываться для каждого элемента
// 2 второй аргумент это начальное значения аккамулятора (acc),0
// 3 в этой ф-ции есть как минимум два параметра (acc, value)
// 4 acc - это как будто total через for 
const total = numbers.reduce((acc, number) => acc + number, 0)

// console.log(total)

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
  };


// reduce - вызываем уже на результате работы, тоесть на массиве
  const totalSalary = Object.values(salary).reduce(
    (total, value) => total += value, 
    0,
  );
//   console.log(totalSalary);

// old school
//   let total = 0;

//   for(const salaryArr of totalSalary){
//     total += salaryArr;
//   }

//   console.log(total)

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
  ];

  const totalTimePlayed = players.reduce(
    (totalTime, {timePlayed}) => totalTime += timePlayed, 
    0,
);

//   console.log(totalTimePlayed)

/*
 * Считаем общую сумму товаров корзины
 */
const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
  ];
  
  const totalAmount = cart.reduce(
    (total, {price, quantity}) => total += price * quantity,
     0,
    );
//   console.log(totalAmount);


  /*
 * Собираем все теги из твитов
 */
const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];
  
  // хочу взять все твиты и редюснуть в один массив acc = []
  const allTags = tweets.reduce((acc, tweet)=>{
    // не хорошо изменять по ссылке параметр acc
    // acc.push(...tweet.tags);

    // на каждой итерации создать новый массив и распылить туда старый acc и потом распыляем текущий массив
    return [...acc, ...tweet.tags];
  }, []);

  console.log(allTags)

  // 1 acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
  // 2 acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
  // 3 return  [...['js', 'nodejs'], ...['html', 'css']]
  // 4 ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */

// const tagsStats = allTags.reduce((acc, tag)=>{
//     console.log(acc);

//     // если свойство с ключом tag есть, увеличить на 1
//     if(acc[tag]){

//         // мы по ссылке в обькте аккумулятора изменяем значения свойства
//         acc[tag] += 1;

//         return acc;
//     }

//     // если свойства нет с таким ключом что в tag, сделать и записать 1
//     acc[tag] = 1;

//     return acc

// }, {})

// переписываем иммутабельно на каждой итерации нужно создать новыйобьект акумулятора
// const tagsStats = allTags.reduce((acc, tag)=>{
//     console.log(acc);

//     // // если свойство с ключом tag есть, увеличить на 1
//     // if(acc[tag]){
//     //     // acc[tag] += 1

//     //     return {
//     //         ...acc,
//     //         [tag]: acc.tag + 1
//     //     };
//     // }

//     // // если свойства нет с таким ключом что в tag, сделать и записать 1
//     // return {
//     //     ...acc,
//     //     [tag]: 1
//     // }
//     // // acc[tag] = 1;

//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1
//     }

// }, {})


// const tagsStats = allTags.reduce((acc, tag)=>({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1 
// }), {})

// console.log(tagsStats);


// const user = {
//     name: 'Mango',
// }

// const key = 'name';

// console.log(user[key]);

// console.log(user['name']);


// {
//     nodejs: 3,
//     js: 3,
//     react: 2,
// }
