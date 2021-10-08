let inputAreas = document.querySelectorAll('.modal-window__input');
let placeholders = document.querySelectorAll('.modal-window__input-placeholder');
let feedbackButtons = document.querySelectorAll('.feedback-button');
let feedbackModale = document.querySelector('.feedback');
let requestCallButtons = document.querySelectorAll('.request-call-button');
let requestCallModale = document.querySelector('.request-call');

for (let i = 0; i < inputAreas.length; i++) {
    addHandlerInput(inputAreas[i], placeholders[i]);
};

for (let feedbackButton of feedbackButtons) {
    changeModaleStatus(feedbackButton, feedbackModale);
};

for (let requestCallButton of requestCallButtons) {
    changeModaleStatus(requestCallButton, requestCallModale);
};

function addHandlerInput (input, placeholder) {
    input.addEventListener('input', function() {
        if (input.value) {
            placeholder.classList.add('modal-window__input-placeholder--active');
        } else {
            placeholder.classList.remove('modal-window__input-placeholder--active');
        }
    });
};

function changeModaleStatus (button, modale) {
    button.addEventListener('click', function() {
        if (sidebar.classList.contains('sidebar--open')) {
            sidebar.classList.remove('sidebar--open');;
        }
        if (button.classList.contains('modal-window__close-button')) {
            body.classList.remove("body-open-sidebar");
            blurArea.classList.remove('global-layout__blur-area--active');
        } else {
            body.classList.add("body-open-sidebar");
            blurArea.classList.add('global-layout__blur-area--active');
        }
        modale.classList.toggle('modal-window--active')
    });
};
