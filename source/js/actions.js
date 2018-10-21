const items = document.querySelectorAll('.option-wrapper');
const buttons = document.querySelectorAll('.buy__button');


[].forEach.call(items, (item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('option-wrapper--selected');
  });
});
