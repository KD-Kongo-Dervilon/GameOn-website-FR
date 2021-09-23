// DOM ELEMENTS FORM FIELDS VALIDATION

const firstName     = document.getElementById('first');
const lastName      = document.getElementById('last');
const email         = document.getElementById('email');
const quantity      = document.getElementById('quantity');
const birthdate     = document.getElementById('birthdate');
const allLocations  = document.getElementById('allLocations');
const locations     = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1     = document.getElementById('checkbox1');
const input         = document.getElementsByClassName('text-control');
const form          = document.getElementById('form');
const regex         = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const regexEmail    = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//======================FORM FIELDS VALIDATIONS=============================//
//Names check all functions  

const checkFirstName = () => {
    if (firstName.value.trim().length < 2 || first.value.trim() ==='' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.classList.add(FormData.error)
        return false;
    }
    first.parentElement.setAttribute('data-error-visible', 'false');
    first.style.border = 'solid #279e7a 0.19rem';
    return true;
};

// function  checkLastName
const checkLastName = () => {
    if (lastName.value.trim().length < 2 || lastName.value.trim() ==='' || !lastName.value.match(regex)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.classList.add(FormData.error)
        return false;
    }
    lastName.parentElement.setAttribute('data-error-visible', 'false');
    lastName.style.border = 'solid #279e7a 0.19rem';
    return true;
};

// function checkEmail
const checkEmail = () => {
    if (email.value.trim().match(regexEmail)) {
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = '0.19rem solid #279e7a';
        return true;
    }
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.classList.add(FormData.error)
    return false;
};

// function checkBirthdate
const checkBirthdate = () => {

    if (birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.classList.add(FormData.error)
        return false;
    }
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    birthdate.style.border = '0.19rem solid #279e7a';
    return true;
};

// NUMBER OF TOURNAMENTS CHECK
const checkTournamentsQuantity = () => {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.classList.add(FormData.error)
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = '0.19rem solid #279e7a';
    return true;
};

// function checkLocations
const checkLocations = () => {
    allLocations.setAttribute('data-error-visible', 'true');

    for(let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
};


// function termsCheckbox 
// terms of use check check
const checkCheckbox = () => {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    checkbox1.parentElement.setAttribute('data-error-visible', 'false');
    return true ;
};


//======================FORM FIELDS VALIDATIONS=============================//

const formFieldsValidation = (element, method, e) => {
    element.addEventListener(e, method);
};

formFieldsValidation(firstName,    checkFirstName, 'focusout');
formFieldsValidation(lastName,     checkLastName, 'focusout');
formFieldsValidation(email,        checkEmail, 'focusout');
formFieldsValidation(birthdate,    checkBirthdate, 'focusout');
formFieldsValidation(quantity,     checkTournamentsQuantity, 'focusout');
formFieldsValidation(allLocations, checkLocations, 'change');
formFieldsValidation(checkbox1,    checkCheckbox, 'change');

//======================FOR ALL FIELDS VALIDATIONS=============================//

function forAllFieldsValidation() {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthdate();
    checkTournamentsQuantity();
    checkLocations();
    checkCheckbox();
}

//======================FORM  VALIDATIONS=============================//

function formValidation() {
    if (checkFirstName() === true &&
        checkLastName()  === true &&
        checkEmail()     === true &&
        checkBirthdate() === true &&
        checkTournamentsQuantity() === true &&
        checkLocations() === true &&
        checkCheckbox()  === true) {
            // Objet for all
            const data = {
                firstName,
                lastName,
                email,
                birthdate,
                quantity,
                allLocations,
                locations,
                checkbox1,
                input,
            }
            console.log(data.firstName.value)
            lastReservation.innerHTML = data.firstName.value;
        return true;
    }
    return false;
}

//======================SEND SUBMIT=============================//

// Send Form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (formValidation()) {
        displayModalSubmit();
        form.reset();
    } else {
        forAllFieldsValidation();
    }
});