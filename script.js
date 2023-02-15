const body = document.querySelector('body');
const popup = document.querySelectorAll('.popup');
const form = document.querySelectorAll('.popup_form');
const loginButton = document.querySelectorAll('.login_button, .popup_login_button');
const registrationButton = document.querySelector('.popup_registration_button');
const popupClose = document.querySelectorAll('.popup_area, .popup_close');
const inputs = document.querySelectorAll('.popup_form_input');
const showPassword = document.querySelectorAll('.popup_show_password');
const toggleIconPassword = document.querySelectorAll('.popup_show_password_background');
const email = [inputs[0], inputs[3]];
const errorMessage = document.querySelectorAll('.error_message');
const password = [inputs[1], inputs[4]];


function validate(elem, error, text) {
    let regexp = /[0-9]/;

    if (!regexp.test(elem.value)) {
        elem.classList.add('error');
        error.innerHTML = text;
    } else {
        elem.classList.remove('error');
        error.innerHTML = '';
    };
}


email[0].addEventListener('input', function () {
    validate(email[0], errorMessage[0], 'Введите электронную почту');
});

email[1].addEventListener('input', function () {
    validate(email[1], errorMessage[3], 'Введите электронную почту');
});

password[0].addEventListener('input', function () {
    validate(password[0], errorMessage[1], 'Введите пароль');
})

password[1].addEventListener('input', function () {
    validate(password[1], errorMessage[4], 'Введите пароль');
})

inputs[2].addEventListener('input', function () {
    validate(inputs[2], errorMessage[2], 'Введите имя');
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


function switchIcon(icon, input) {
    if (input.type === 'password') {
        input.type = 'text';
        icon[1].classList.remove('unactive');
        icon[0].classList.add('unactive');
    } else {
        input.type = 'password';
        icon[1].classList.add('unactive');
        icon[0].classList.remove('unactive');
    }
}

showPassword[0].onclick = () => {
    let toggle = [toggleIconPassword[0], toggleIconPassword[1]];
    let inputPassword = inputs[2];

    switchIcon(toggle, inputPassword);
}

showPassword[1].onclick = () => {
    let toggle = [toggleIconPassword[2], toggleIconPassword[3]];
    let inputPassword = inputs[4];

    switchIcon(toggle, inputPassword);
}


function checkSpace(e) {
    if (e.value === '') {
        e.classList.add('error');
        e.placeholder = 'Заполните поле';
        event.preventDefault();
    } else {
        e.classList.remove('error');
    }
};


form[0].onsubmit = function () {
    let input = [inputs[0], inputs[1], inputs[2]];
    let mail = email[0];

    input.forEach(e => checkSpace(e));
    if (mail.value.length < 6) {
        mail.classList.add('error');
        event.preventDefault();
    }
};

form[1].onsubmit = function () {
    let input = [inputs[3], inputs[4]];
    let mail = email[1];

    input.forEach(e => checkSpace(e));
    if (mail.value.length < 6) {
        mail.classList.add('error');
        event.preventDefault();
    }
};