var items = document.querySelectorAll('.options-list__item');
var buttons = document.querySelectorAll('.buy__button');
var toggleWrapperClass = function (card) {
  card.classList.toggle('option-wrapper--selected');
};


[].forEach.call(items, (item) => {
  var card = item.querySelector('.option-wrapper');
  var button = item.querySelector('.buy__button');
  card.addEventListener('click', () => {
    toggleWrapperClass(card);
  });
  button.addEventListener('click', () => {
    toggleWrapperClass(card);
  });
});
