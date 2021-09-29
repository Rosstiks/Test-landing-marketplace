let buttonMore = document.querySelectorAll('.button-more');
let buttonMoreControlElement = document.querySelectorAll('.button-more__control-element');

let addButtonHandler = function(button, element) {
    button.addEventListener('click', function () {
        if (button.classList.contains('button-more--close')){
            button.textContent = 'Читать далее';
            if (window.innerWidth < 767.98) {
                element.style.maxHeight = '90px';
            } else {
                element.style.maxHeight = '160px'
            }
        } else {
            button.textContent = 'Скрыть';
            element.style.maxHeight = '1000px';
        }
        button.classList.toggle('button-more--close')    
    });
}

for (let i = 0; i < buttonMore.length; i++) {
    addButtonHandler(buttonMore[i], buttonMoreControlElement[i]);
}