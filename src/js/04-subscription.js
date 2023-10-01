import '../css/common.css';
import BSN from 'bootstrap.native';

const refs = {
    modal: document.querySelector('#subscription-modal'),
    subscribeBtn: document.querySelector('button[data-subscribe]'),
}

const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

const modal = new BSN.Modal('#subscription-modal');
console.log(modal);

openModal()

refs.modal.addEventListener('hide.bs.modal', openModal)
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick)


function openModal(){
    if(promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed){
        console.log('максимальное кщл-во модалок')
        return
    }

    setTimeout(() => {
        console.log('Открываем модалку')
        modal.show()

        promptCounter += 1;
    }, PROMPT_DELAY)
    
}

function onSubscribeBtnClick(){
    hasSubscribed = true;
    modal.hide();
}

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if(promptCounter === MAX_PROMPT_ATTEMPTS){
//         console.log('нужно остановить интервал');
//         clearInterval(intervalId);
//         return;
//     }

//     console.log('Подпишитесь на рассылку - ' + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY)