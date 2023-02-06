const loginBtn = document.querySelector('.login_button');
const loginForm = document.querySelector('.popup_form');
const popup = document.querySelector('.popup');
const popupClose = document.querySelectorAll('.popup_area, .popup_close');
const showPassword = document.querySelector('.popup_show_password');
const loginInputs = document.querySelectorAll('.popup_form_input');


loginBtn.onclick = () => popup.classList.add('open');
popupClose.forEach(close => close.onclick = () => popup.classList.remove('open'));
showPassword.onclick = () => { (loginInputs[1].type === 'password') ? loginInputs[1].type = 'text' : loginInputs[1].type = 'password' };

loginForm.onsubmit = function () {
    let submitForm;

    loginInputs.forEach(input => checkSpace(input));
    loginInputs.forEach(input => input.placeholder = 'Обязательное поле');

    loginInputs.forEach(input => (input.value === '') ? submitForm = false : '');
    return submitForm;
}

function checkSpace(input) { (input.value === '') ? input.classList.add('error') : input.classList.remove('error') };