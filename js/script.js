'use strict';

var buttonShowAll = document.querySelector('.page__show-all');  // показать все

buttonShowAll.addEventListener('click', function () {
  document.querySelector('.page__prices-hidden').classList.remove('hidden');
  buttonShowAll.classList.add('hidden');
});

var tables = document.querySelectorAll('.prices');
var orderButtons = document.querySelectorAll('.prices__order');  // изменение стилей кнопки

for (var i = 0; i < tables.length; i++) {
  tables[i].addEventListener('change', function(evt) {
    var targetID = evt.target.id;

    for (var i = 1; i < orderButtons.length ; i++) {
      if (targetID == i) {
        orderButtons[i - 1].classList.add('prices__order--checked');
        break;
      }
    }
  });
}


var buttons = document.querySelectorAll('.prices__order'); // вызвать модальное окно

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    document.querySelector('.modal-overlay').classList.remove('hidden');
  });
}


var modalOverlay = document.querySelector('.modal-overlay'); // закрыть модальное окно ESC
var modalClose = document.querySelector('.modal-overlay__close');

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    document.querySelector('.modal-overlay').classList.add('hidden');
  }
});

modalClose.addEventListener('click', function () {
    document.querySelector('.modal-overlay').classList.add('hidden');
});
