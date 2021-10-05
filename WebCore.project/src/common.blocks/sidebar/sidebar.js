let body = document.querySelector("body");
let sidebar = document.querySelector(".sidebar");
let buttonMenu = document.querySelectorAll(".menu-button");

for (let i = 0; i < buttonMenu.length; i++) {
  changeSidebarStatus(buttonMenu[i]);
}

function changeSidebarStatus(button) {
  button.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar--open");
    body.classList.toggle("body-mobile-sidebar");
  });
}
