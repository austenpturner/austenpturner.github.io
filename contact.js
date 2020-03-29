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
    validateForm(firstName, lastName, email, msg);
});

const validateForm = (firstName, lastName, email, msg) => {
    if (!firstName && !lastName && !email && !msg) {
        let errorValues = [formError, firstNameError, lastNameError, emailError, msgError];
        let inputValues = [];
        showError(errorValues);
        hideError(inputValues);
    } else if (!firstName && !lastName && !email) {
        let errorValues = [formError, firstNameError, lastNameError, emailError];
        let inputValues = [msgError];
        showError(errorValues);
        hideError(inputValues);
    } else if (!firstName && !lastName && !msg) {
        let errorValues = [formError, firstNameError, lastNameError, msgError];
        let inputValues = [emailError];
        showError(errorValues);
        hideError(inputValues);
    } else if (!lastName && !email && !msg) {
        let errorValues = [formError, lastNameError, emailError, msgError];
        let inputValues = [fistNameError];
        showError(errorValues);
        hideError(inputValues);
    } else if (!firstName && !email && !msg) {
        let errorValues = [formError, firstNameError, emailError, msgError];
        let inputValues = [lastNameError];
        showError(errorValues);
        hideError(inputValues);
    } else if (!firstName && !lastName) {
        let errorValues = [formError, firstNameError, lastNameError];
        let inputValues = [emailError, msgError];
        showError(errorValues);
        hideError(inputValues); 
    } else if (!firstName && !email) {
        let errorValues = [formError, firstNameError, emailError];
        let inputValues = [lastNameError, msgError];
        showError(errorValues);
        hideError(inputValues);
    } else if (!firstName && !msg) {
        let errorValues = [formError, firstNameError, msgError];
        let inputValues = [lastNameError, emailError];
        showError(errorValues);
        hideError(inputValues); 
    } else if (!lastName && !email) {
        let errorValues = [formError, lastNameError, emailError];
        let inputValues = [firstNameError, msgError];
        showError(errorValues);
        hideError(inputValues); 
    } else if (!lastName && !msg) {
        let errorValues = [formError, lastNameError, msgError];
        let inputValues = [firstNameError, emailError];
        showError(errorValues);
        hideError(inputValues);
    } else if (!msg && !email) {
        let errorValues = [formError, emailError, msgError];
        let inputValues = [firstNameError, lastNameError];
        showError(errorValues);
        hideError(inputValues); 
    } else if (!firstName) {
        let errorValues = [formError, firstNameError];
        let inputValues = [lastNameError, emailError, msgError];
        showError(errorValues);
        hideError(inputValues);
    } else if (!lastName) {
        let errorValues = [formError, lastNameError];
        let inputValues = [firstNameError, emailError, msgError];
        showError(errorValues);
        hideError(inputValues);
    }else if (!email) {
        let errorValues = [formError, emailError];
        let inputValues = [firstNameError, lastNameError, msgError];
        showError(errorValues);
        hideError(inputValues);
    } else if (!msg) {
        let errorValues = [formError, msgError];
        let inputValues = [firstNameError, lastNameError, emailError];
        showError(errorValues);
        hideError(inputValues);
    } else {
        hideError([formError, firstNameError, lastNameError, emailError, msgError]);
        formSuccess.style.display = 'block';
    }
};

const showError = values => {
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        console.log(value);
        value.style.display = 'none';
        if (value.style.display === 'none') {
            console.log('none!');
            value.style.display = 'block';
        }
    }
};

const hideError = (values) => {
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        console.log(value);
        value.style.display = 'block';
        if (value.style.display === 'block') {
            console.log('block!');
            value.style.display = 'none';
        }
    } 
};