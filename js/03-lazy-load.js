/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */


const lazyImages = document.querySelectorAll('img[loading="lazy"]');

console.log(lazyImages);

lazyImages.forEach(image => {

    // once - только один раз
    image.addEventListener('load', onImagesLoaded, {once: true})
})

function onImagesLoaded(evt){
    console.log('Картинка загрузилась')
    evt.target.classList.add('appear');
}

