/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

// // mouseenter - срабатывает когда мышка заходит в границы блока и находится над ним
// boxRef.addEventListener('mouseover', onMouseEnter);

// // mouseleave - срабатывает когда мышка выходит за границы блока
// boxRef.addEventListener('mouseout', onMouseLeave);

// mousemove - болтливое событие 
boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
    const box = event.currentTarget;
    box.classList.add('box--active');
  }
  
  function onMouseLeave(event) {
    const box = event.currentTarget;
    box.classList.remove('box--active');
  }
  
  function onMouseMove(event) {
    console.log(event);
  }