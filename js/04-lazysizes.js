/*
 * Библиотека lazysizes
 * - feature detection
 */


// если браузер поддерживает линивую загрузку нативно
// if ('loading' in HTMLImageElement.prototype) {
//     console.log('Браузер поддерживает линивки');

//     addSrcAttrTolzyImages();
//   } else {
//     console.log('Браузер НЕ поддерживает линивки');

//     addLazySizesScript();
//   }


// // добавляем анимашку
// const lazyImages = document.querySelectorAll('img[data-src]');

// lazyImages.forEach(image => {

//     // once - только один раз
//     image.addEventListener('load', onImagesLoaded, {once: true})
// })

// function onImagesLoaded(evt){
//     console.log('Картинка загрузилась')
//     evt.target.classList.add('appear');
// }

// function addLazySizesScript(){
//     const script = document.createElement('script');
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" 
//     script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
//     script.crossOrigin = "anonymous" 

//     document.body.appendChild(script);
// }

// function addSrcAttrTolzyImages(){
//     const lazyImages = document.querySelectorAll('img[loading="lazy"]');

//     lazyImages.forEach(img => {
//         img.src = img.dataset.src;
//       });
// }