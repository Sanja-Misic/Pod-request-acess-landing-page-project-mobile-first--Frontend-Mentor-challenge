'use strict';

const formInput = document.querySelector('.access__form-input');
const formButton = document.querySelector('.access__form-button');
const formErrorMessage = document.querySelector('.access__form-error-message');

const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formButton.addEventListener('click', function (e) {
  e.preventDefault();

  if (formInput.value === '') {
    formErrorMessage.classList.add('access__form-error-message--show');
    formErrorMessage.innerText = 'Oops! Please add your email';
  } else if (!formInput.value.match(emailFormat)) {
    formErrorMessage.classList.add('access__form-error-message--show');
    formErrorMessage.innerText = 'Oops! Please check your email';
  } else if (!(formInput.value === '') && formInput.value.match(emailFormat))
    formErrorMessage.classList.remove('access__form-error-message--show');
});
