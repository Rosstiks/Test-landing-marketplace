export function sidebar () {  
  let body = document.querySelector("body");
  let sidebar = document.querySelector(".sidebar");
  let blurArea = document.querySelector(".global-layout__blur-area");
  let buttonMenu = document.querySelectorAll(".menu-button");
  let feedbackModale = document.querySelector('.feedback');
  let requestCallModale = document.querySelector('.request-call');

  for (let i = 0; i < buttonMenu.length; i++) {
    changeSidebarStatus(buttonMenu[i]);
  }

  blurArea.addEventListener("click", function () {
    if (!feedbackModale.classList.contains('modal-window--active') &&
    !requestCallModale.classList.contains('modal-window--active')) {
      toggleClasses();
    }
  });

  function changeSidebarStatus(button) {
    button.addEventListener("click", function () {
      toggleClasses();
    });
  }

  function toggleClasses() {
    sidebar.classList.toggle("sidebar--open");
    blurArea.classList.toggle("global-layout__blur-area--active");
    body.classList.toggle("body-open-sidebar");
  }
}