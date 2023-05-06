/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt){
//     if(evt.target.nodeName !== "BUTTON"){
//         return;
//     }

//     // ищем текущий активный элемент
//     const currentActiveBtn = document.querySelector('.tags__btn--active');

//     // если текущий активный?
//     // if(currentActiveBtn){
//     //     currentActiveBtn.classList.remove('tags__btn--active');
//     // }

//     // ? - если есть обьект, (не undefined или null) то возьмеи свойство classList
//     currentActiveBtn?.classList.remove('tags__btn--active');
    

//     // console.log(evt.target)
//     const nextActiveBtn =  evt.target;
//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;
//     console.log(selectedTag)
// }


const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

// добавить уникальные значения, работает только с примитивами
// selectedTags.add(5);
// selectedTags.add(5);
// selectedTags.add(5);

// selectedTags.add(4);
// selectedTags.add(4);

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt){
    if(evt.target.nodeName !== "BUTTON"){
        return;
    }

    const btn = evt.target;
    const tag = btn.dataset.value;

    // contains - есть ли класс tags__btn--active ?
    const isActive = btn.classList.contains('tags__btn--active');

    if(isActive){
        // если на текущем элименте уже есть класс active то удали из сета тег на который мы кликнули ?
        selectedTags.delete(tag)
    }else{
        // если нет класса active (он не активный) добавить в сет тег на который мы кликнули  
        selectedTags.add(tag)
    }

    btn.classList.toggle('tags__btn--active')
    console.log(selectedTags)
    
}




// const settings = {
//     theme: {
//         userDefined: {
//             color: 'red',
//         }
//     }
// }

// // что бы скрипт не падал:
// // есть обьект settings && и если true у него есть свойство theme && и есть settings.theme.userDefined?
// if(settings && settings.theme && settings.theme.userDefined){
//     // и тогда ты можеш гарантировать что у него есть свойство хотя бы color
//     console.log(settings.theme.userDefined.color)
// }

// если settings это обьект тогда у него возьми свойство theme, и тема если это обьект возьми свойство userDefined, и если это свойство обьект возьми у него color
// console.log(settings?.theme?.userDefined?.color)


// тернарник для присваения значения по условию
// let x;
// if(qwe){
//     x = 2
// }else{
//     x = 1
// }

// x = qwe ? 1 : 2