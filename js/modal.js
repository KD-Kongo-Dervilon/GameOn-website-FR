// DOM ELEMENTS MODAL 

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Button Close Modal
const closeBtn = document.querySelector('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


        //==============DISPLAY MODAL=============//

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form 
const closeModal = () => {
  modalbg.style.display ='none';
}

// close modal event 
closeBtn.addEventListener('click', (closeModal));

// ------ DISPLAY NAV RESPONSIVE ------ //
// EDIT NAV
function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}