/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//   };

// console.log(
//     playlist.name, 
//     playlist.rating, 
//     playlist.tracks, 
//     playlist.trackCount
// )

// 1 имя локальной переменной должно совпадать с именим свойств обьекта

// если слева от равно увидели фигурные скобки, это не литерал обьекта, это деструктуризация(распаковка)
// const {
//     name = 'User', 
//     rating, tracks, 
//     trackCount: numberOfTracks = 0, 
//     author = 555
// } = playlist;

// значение по умолчанию, если в обьекте нет свойства с таким именем в переменную author будет записано то что вы ставите после равно, если же в обьекте такое свойство есть, будет записано его значение, а значение по умолчанию проигнорируется
// console.log(author)

// если вам необходимо что бы локальная переменная имела другое имя чем свойство в обьекте?

// в локальную переменную numberOfTracks положи значение свойства trackCount из обьекта playlist
// console.log(numberOfTracks);


// console.log(rating, tracks, name, trackCount);

// если менять локальные переменные свойства обьекта изменятся?
// 1 если значения свойства это приметив то делается копия( независимое значение )
// 2 если значения свойства это сложный тип, то кладеться ссылка на оригинал

// tracks.push('qweqew');

// console.log(tracks);

// console.log(playlist)


/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//     name, 
//     tag, 
//     location, 
//     avatar,
//     // возьми то что в stats деструктуризируй ещё в переменные
//     stats: {followers, views, likes},
// } = profile;

// аналог деструктуризации
// const name = profile.name;
// const tag = profile.tag;
// const followers = profile.stats.followers;

// const {followers, views, likes} = stats;

// console.log(name, tag, location, avatar, followers, views, likes);


/*
 * Деструктуризация массивов
 */

const rgb = [255, 100, 80];

// слева от равно квадратные скобки, а спарава массив( записывается по порядку, слева на право )
const [red, , blue] = rgb;

// если нужно только красный и синий, а зеленый пропустить ставим " , " 
// console.log(red, blue);

const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
  };

// найти самый большой рейтинг авторов
// const keys = Object.keys(authors);
// console.log(keys);
// // console.log(Math.max(...rating))

// for(const key of keys){
//     console.log(key);
//     console.log(authors[key]);
// }

// Object.entries - возвращает массив массивов, где каждый элимент это ещё один массив
// const entries = Object.entries(authors);

// // 0 - это ключ, а 1 - это значение
// console.log(entries);

// // ур 3 переменная entry и ссылка на этот массив, есть прямо здесь
// for(const [name, rating] of entries){
//     // ур 1
//     // const name = entry[0];
//     // const rating = entry[1];

//     // ур2 возьми массив entry и деструктуризируй 0 - элимент в name, а 1 - элимент в rating
//     // const [name, rating] = entry;

//     console.log(name, rating);
// }


/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// когда из обьекта необходимо выкинуть определенное кол-во свойств, в локальные переменные
// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);

// // а остальные собрать в произвольный обьект, другой
// console.log(restProps);

// const restProps = {
//     avatar: profile.avatar,
//     stats: profile.stats,
// }


/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

// если 2-3 свойства деструктурезируйте в параметрах ф-ции
const showProfileInfo = function (userProfile) {

    // деструктуризируем свойства в локальные переменные
    const {name, tag, location, ...restProps} = userProfile;

    // console.log(name, tag, location, avatar, followers, views, likes);

    console.log(restProps);
}

const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

// обьект настроек применяется когда у ф-ции три или больше аргументов
showProfileInfo(profile)
