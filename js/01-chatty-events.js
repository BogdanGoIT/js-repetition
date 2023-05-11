/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
 */

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

// _.throttle - возвращает ф-цию раз в 500ms(тротл - затормозить)

// window.addEventListener('mousemove', _.throttle(onMouseMove, 500))

function onMouseMove(event) {
    mouseMoveCbInvocationCounter += 1;
  
    coordsOutputRef.textContent = `
      Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
      X: ${event.clientX},
      Y:${event.clientY}
    `;
  }


/*
 * Input и debounce
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

let inputCbInvocationCounter = 0;

// _.debounce - вызови ф-цию тогда, когда прикратится поток событий на 2000ms

inputRef.addEventListener('input', _.debounce(onInputChange, 2000));

function onInputChange(event) {
    inputCbInvocationCounter += 1;
  
    outputRef.textContent = `
      Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
      Значение: ${event.target.value}
    `;
  }

