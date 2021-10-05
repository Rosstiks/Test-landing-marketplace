let menuItem = document.querySelectorAll(".menu__item");

for (let i = 0; i < menuItem.length; i++) {
  addEventMenuItem(menuItem[i]);
}

function addEventMenuItem(item) {
  item.addEventListener("click", function () {
    clearActiveClass();
    item.classList.add("menu__item--active");
  });
}

function clearActiveClass() {
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.remove("menu__item--active");
  }
}
