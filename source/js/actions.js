var item = document.querySelector(".option-wrapper");

var itemclick = function () {
  item.classList.toggle("option-wrapper--selected");
};

var itemselectedhover = function () {
    item.classList.toggle("option-wrapper--selected-hover");
};

var itemhover = function () {
  item.classList.toggle("option-wrapper-hover");
};

item.addEventListener('click', function () {
    itemclick();
});

item.addEventListener('mouseout', function() {
  if (item.classList.contains("option-wrapper--selected")) {
    itemselectedhover();
    console.log(123);
  } else itemhover();
});

/*

for (var i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function(event) {
    event.preventDefault();
    item.classList.toggle("option-wrapper--selected");
  });
};

*/
