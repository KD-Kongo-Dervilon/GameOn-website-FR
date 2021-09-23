// DOM ELEMENTS SUBMITTED CONFIRMATION
const modalSubmit           = document.querySelector('.container-confirmation-submit');
const closeModalSubmit      = document.querySelector('.close-modal-submit');
const closeBtnConfirmation  = document.getElementById('close-btn-confirmation');


//======================SEND SUBMIT=============================//

// Display Modal submit

const displayModalSubmit = () => {
    modalbg.style.display = 'none';
    modalSubmit.style.display = 'block';
}

// Close submit

const closeSubmit = () => {
    modalSubmit.style.display = 'none';
    first.style.border        = 'none';
    last.style.border         = 'none';
    email.style.border        = 'none';
    birthdate.style.border    = 'none';
    quantity.style.border     = 'none';
} 

//Event Close Modal Submit 
closeModalSubmit.addEventListener('click', (closeSubmit));
closeBtnConfirmation.addEventListener('click', (closeSubmit));
