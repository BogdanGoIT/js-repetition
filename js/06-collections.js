/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

const colorPickerContainerEl = document.querySelector('.js-color-picker');


// old school
// const element = [];
// for(let i = 0; i < colorPickerOptions.length; i += 1){
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option')
//     buttonEl.textContent = colorPickerOptions[i].label;
    
//     // сделать инлайн стиль в форме camelCase
//     buttonEl.style.backgroundColor = colorPickerOptions[i].color;
//     element.push(buttonEl);

// }
// colorPickerContainerEl.append(...element);


// new school - в option приходят обьекты типа: { label: 'red', color: '#F44336' },
// const option = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option')
//     buttonEl.textContent = option.label;
    
//     // сделать инлайн стиль в форме camelCase
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl
// });

// console.log(option)

// colorPickerContainerEl.append(...option);


/*
 * Пишем функцию для создания разметки колорпикера
 */

const makeColorPickerOption = option => option.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__option')
    buttonEl.textContent = option.label;
    
    // сделать инлайн стиль в форме camelCase
    buttonEl.style.backgroundColor = option.color;

    return buttonEl
})

const colorPickerEl = makeColorPickerOption(colorPickerOptions);

colorPickerContainerEl.append(...colorPickerEl)

