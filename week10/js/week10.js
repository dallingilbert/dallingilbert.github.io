// grab form element from DOM
const form = document.getElementById('pInfo');

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('mail');


const lnameErr = document.querySelector('span.errorLast')
const fnameErr = document.querySelector('span.errorFirst');
const emailErr = document.querySelector('span.error');


email.addEventListener("input", function(event) {
    if (email.validity.valid) {
        emailErr.textContent = '';
        emailErr.className = 'error';
    } else {
        showErr();
    }
});

fname.addEventListener("input", function (e) {
    if (fname.validity.valid) {
        fnameErr.textContent = '';
        fnameErr.className = 'errorFirst';
    } else {
        showErr();
    }
});

lname.addEventListener("input", function (e) {
    if (lname.validity.valid) {
        lnameErr.textContent = '';
        lnameErr.className = 'errorLast';
    } else {
        showErr();
    }
});

form.addEventListener('submit', function (event) {
    // submit form if field is valid
    if (!email.validity.valid) {
        // display error message if it is not correct format
        showErr();

        // prevent form from submitting
        event.preventDefault();
    }
});

function showErr() {
    // email errors
    if (email.validity.valueMissing) {
        emailErr.textContent = "This field is required *";
    } else if (email.validity.typeMismatch) {
        emailErr.textContent = "Please enter an email in the format of <username>@gmail.com";
    } 
    emailErr.className = 'error active';

    // name errors
    if (fname.validity.valueMissing) {
        fnameErr.textContent = "This field is required *";
    } else if (fname.validity.typeMismatch) {
        fnameErr.textContent = "Please enter a valid name!";
    }

    if (lname.validity.valueMissing) {
        lnameErr.textContent = "This field is required *";
    } else if (lname.validity.typeMismatch) {
        lnameErr.textContent = "Please enter a valid name!";
    }
}
