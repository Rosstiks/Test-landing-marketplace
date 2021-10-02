let buttonMore = document.querySelectorAll(".button-more");
let buttonMoreControlElement = document.querySelectorAll(
  ".button-more__control-element"
);

for (let i = 0; i < buttonMore.length; i++) {
  addButtonHandler(buttonMore[i], buttonMoreControlElement[i]);
  checkMaxHeight(buttonMore[i], buttonMoreControlElement[i]);
}

window.addEventListener("resize", function () {
  for (let i = 0; i < buttonMore.length; i++) {
    checkMaxHeight(buttonMore[i], buttonMoreControlElement[i]);
  }
});

function addButtonHandler(button, element) {
  button.addEventListener("click", function () {
    if (button.classList.contains("button-more--close")) {
      hideContent(button, element);
    } else {
      showContent(button, element);
    }
    button.classList.toggle("button-more--close");
  });
}

function hideContent(button, element) {
  if (element.classList.contains("about__text-area")) {
    button.textContent = "Читать далее";
  } else {
    button.textContent = "Показать ещё";
  }

  if (window.innerWidth < 767.98) {
    element.style.maxHeight = "90px";
  } else {
    element.style.maxHeight = "176px";
  }
}

function showContent(button, element) {
  button.textContent = "Скрыть";
  element.style.maxHeight = "400px";
}

function checkMaxHeight(button, element) {
  if (
    (element.clientHeight >= element.scrollHeight &&
      !button.classList.contains("button-more--close")) ||
    (button.classList.contains("section__button") &&
      document.documentElement.clientWidth < 768)
  ) {
    button.style.display = "none";
  } else {
    button.style.display = "block";
  }
}
