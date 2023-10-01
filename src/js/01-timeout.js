import '../css/common.css';


/*
 * если один раз вызвать ф-цию через определенное время
 * Метод window.setTimeout(callback, delay, args)
 */


// console.log('До вызова setTimeout');

// setTimeout((x) => {
//     console.log(x)
//     console.log('1-Внутри callback для setTimeout');
// }, 2000, 5)


// console.log('После вызова setTimeout');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
    console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
  };

  
const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if(shouldCancelTimer){
    clearTimeout(timerId)
}

