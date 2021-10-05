let body = document.querySelector("body");
let sidebar = document.querySelector(".sidebar");
let blurArea = document.querySelector(".contant-container__blur-area");
let buttonMenu = document.querySelectorAll(".menu-button");

for (let i = 0; i < buttonMenu.length; i++) {
  changeSidebarStatus(buttonMenu[i]);
}

blurArea.addEventListener("click", function () {
  toggleClasses();
});

function changeSidebarStatus(button) {
  button.addEventListener("click", function () {
    toggleClasses();
  });
}

function toggleClasses() {
  sidebar.classList.toggle("sidebar--open");
  blurArea.classList.toggle("contant-container__blur-area--active");
  body.classList.toggle("body-open-sidebar");
}
