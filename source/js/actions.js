var items = document.querySelectorAll('.options-list__item');
var buttons = document.querySelectorAll('.buy__button');
var toggleWrapperClasses = function (card, buy, buydescription) {
  card.classList.toggle('option-wrapper--selected');
  buy.classList.toggle('buy--hide');
  buydescription.classList.toggle('buy-description--show');
};


[].forEach.call(items, (item) => {
  var card = item.querySelector('.option-wrapper');
  var button = item.querySelector('.buy__button');
  var buy = item.querySelector('.buy');
  var buydescription = item.querySelector('.buy-description');
  var disableddescription = item.querySelector('.disabled-description');
  if (card.disabled) {
    buy.classList.add('buy--hide');
    buydescription.classList.remove('buy-description--show');
    disableddescription.classList.toggle('disabled-description--show');
  }
  card.addEventListener('click', () => {
    toggleWrapperClasses(card, buy, buydescription);
  });
  button.addEventListener('click', () => {
    toggleWrapperClasses(card, buy, buydescription);
  });
});
