/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

// Паттерн «Объект ссылок» - блок выборки элиментов
const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
}

// // focus - получения фокуса в инпуте
// refs.input.addEventListener('focus', onInputFocus);

// // blur - потяеря фокуса в инпуте
// refs.input.addEventListener('blur', onInputBlur);

// change - получения значения в инпуте, происходит при потере фокуса используем на checkbox и radio
// refs.input.addEventListener('change', onInputChange)

// input - каждое изминение внутри этого инпута
refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

    function onInputFocus() {
        console.log('Инпут получил фокус - событие focus');
      }

    function onInputBlur() {
        console.log('Инпут потерял фокус - событие blur');
      }

    function onInputChange(event) {
      console.log(event.currentTarget.value);

      refs.nameLabel.textContent = event.currentTarget.value;
    }

    function onLicenseChange(event) {

      // кнопка выключена когда элимент не выбран
        refs.btn.disabled = !event.currentTarget.checked;
    }