/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
  };
  
  // событие 'keydown' - реагирует на нажатие любых клавиш, включая служебные
  // событие 'keypress - реагирует на нажатие тех клавиш которые гинерят какой то символ
  window.addEventListener('keypress', onKeypress);

  refs.clearBtn.addEventListener('click', onClearOutput);


  function onKeypress(event) {
    // хранит физическую клавишу
    console.log('event.key: ', event.key);

    // хранит символ который был введен с клавиатуры
    console.log('event.code: ', event.code);

    refs.output.textContent += event.key;
  }

  function onClearOutput() {
    refs.output.textContent = '';
  }