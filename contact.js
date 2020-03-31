const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const msgInput = document.querySelector('#msg');
const submitBtn = document.querySelector('#submit-btn');
const formError = document.querySelector('#form-error');
const formSuccess = document.querySelector('#form-success');
const firstNameError = document.querySelector('#firstName-error');
const lastNameError = document.querySelector('#lastName-error');
const emailError = document.querySelector('#email-error');
const msgError = document.querySelector('#msg-error');


submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const msg = msgInput.value.trim();
    const values = [firstName, lastName, email, msg];
    const errors = [firstNameError, lastNameError, emailError, msgError];
    validateForm(values, errors);
});

const validateForm = (values, errors) => {
  const errorValues = [];
  const inputValues = [];
  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    if (!value) {
        let errorValue = errors[i];
        errorValues.push(errorValue);
    } else {
        let inputValue = errors[i];
        inputValues.push(inputValue);
    }
  }
  if (errorValues.length === values.length) {
    errorValues.push(formError);
    errorMsgDisplay(errorValues, 'none', 'block');
  } else if (errorValues.length === 0) {
    inputValues.push(formError);
    errorMsgDisplay(inputValues, 'block', 'none');
    formSuccess.style.display = 'block';
  } else {
    errorValues.push(formError);
    errorMsgDisplay(errorValues, 'none', 'block');
    errorMsgDisplay(inputValues, 'block', 'none');
  }
};

const errorMsgDisplay = (values, displayVal1, displayVal2) => {
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        value.style.display = displayVal1;
        if (value.style.display === displayVal1) {
            value.style.display = displayVal2;
        }
    } 
};