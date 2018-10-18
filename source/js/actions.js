var item = document.querySelector(".option-wrapper");

var itemtoggle = function () {
  item.style.background = "linear-gradient(135deg, transparent 31px, black 0) top left";
}

item.addEventListener('onmouseout', function () {
    itemtoggle();
});
