/*
 * 1. Открыть и закрыть по кнопке onOpenModal и onModalClose
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onModalClose);
  refs.backdrop.addEventListener('click', onBackDropClick);

 

  function onOpenModal() {
    // подписаться на событие прослушиваения 'keydown'
    window.addEventListener('keydown', onEscapeKeypress);

    document.body.classList.add('show-modal');
  }

  function onModalClose() {
    // отпишитесь от собітия прослушивания 'keydown' и снимите регистрацию onEscapeKeypress
    window.removeEventListener('keydown', onEscapeKeypress);

    document.body.classList.remove('show-modal');
    
  }

  function onBackDropClick(event) {

    // currentTarget - текущий элимент, на котором мы словили событие
    console.log('event.currentTarget', event.currentTarget);

    // target - целевой элимент, то место где произошло это событие
    console.log('event.target', event.target)

    if(event.currentTarget === event.target){
        console.log('Кликнули именно в backdrop');
        onModalClose();
    }
  }

  function onEscapeKeypress(event){
    console.log(event);
    const ESC_KEY_CODE = "Escape";

    if(event.code === ESC_KEY_CODE){
        console.log('Нажаили на Esc');
        onModalClose();
    }
    
  }

// Всплытие событий происходит на самом глубоко вложенном элименте, а потом оно как будто всплывает через всех его предков, и ловим мы его на бекдропе потому что там лежит слушатель событий

// div.backdrop -----------------------------  ловим тут
//  div.modal       --------------------- 
//     p                  ----------  происходит тут


//                        МЫ



  