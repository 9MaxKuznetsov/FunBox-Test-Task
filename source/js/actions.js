const items = document.querySelectorAll('.option-wrapper');


[].forEach.call(items, (item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('option-wrapper--selected');
  });
})
