const body = document.querySelector('body');
const popup = document.querySelectorAll('.popup');
const form = document.querySelectorAll('.popup_form');
const loginButton = document.querySelectorAll('.login_button, .popup_login_button');
const registrationButton = document.querySelector('.popup_registration_button');
const popupClose = document.querySelectorAll('.popup_area, .popup_close');
const inputs = document.querySelectorAll('.popup_form_input');
const showPassword = document.querySelectorAll('.popup_show_password');
const showPasswordIcon = document.querySelectorAll('.popup_show_password_background');
const errorMessage = document.querySelectorAll('.error_message');
const regexp = /\w@{1}/;
const regexp1 = /[0-9a-zА-я]/;



function getError(elem, error, text, regex) {

    if (!regex.test(elem.value)) {
        elem.classList.add('error');
        error.innerHTML = text;
        event.preventDefault();
    } else {
        elem.classList.remove('error');
        error.innerHTML = '';
    };
};

inputs[0].addEventListener('input', function () {
    getError(inputs[0], errorMessage[0], 'Некорректная почта', regexp);
});

inputs[1].addEventListener('input', function () {
    getError(inputs[1], errorMessage[1], 'Введите пароль', regexp1);
})

inputs[2].addEventListener('input', function () {
    getError(inputs[2], errorMessage[2], 'Введите имя', regexp1);
})

inputs[3].addEventListener('input', function () {
    getError(inputs[3], errorMessage[3], 'Некорректная почта', regexp);
});

inputs[4].addEventListener('input', function () {
    getError(inputs[4], errorMessage[4], 'Введите пароль', regexp1);
})



loginButton.forEach(e => e.onclick = () => {
    popup[0].classList.add('open');
    popup[1].classList.remove('open');
    body.classList.add('scroll_lock');
});

registrationButton.onclick = () => {
    popup[0].classList.remove('open');
    popup[1].classList.add('open');
};

popupClose.forEach(e => e.onclick = () => {
    popup.forEach(popup => popup.classList.remove('open'));
    body.classList.remove('scroll_lock');
});



function switchIcon(input, icon) {
    if (input.type === 'password') {
        input.type = 'text';
        icon.forEach(e => e.classList.toggle('unactive'));
    } else {
        input.type = 'password';
        icon.forEach(e => e.classList.toggle('unactive'));
    }
}

showPassword[0].onclick = () => {
    let icon = [showPasswordIcon[0], showPasswordIcon[1]];
    switchIcon(inputs[1], icon);
}

showPassword[1].onclick = () => {
    let icon = [showPasswordIcon[2], showPasswordIcon[3]];
    switchIcon(inputs[4], icon);
}



form[0].onsubmit = function () {
    getError(inputs[0], errorMessage[0], 'Некорректная почта', regexp);
    getError(inputs[1], errorMessage[1], 'Введите пароль', regexp1);
};

form[1].onsubmit = function () {
    getError(inputs[2], errorMessage[2], 'Некорректное имя', regexp1);
    getError(inputs[3], errorMessage[3], 'Некорректная почта', regexp);
    getError(inputs[4], errorMessage[4], 'Введите пароль', regexp1);
};