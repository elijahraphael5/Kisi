const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");

sign_up_btn.addEventListener('click', (event) => {
    event.preventDefault();
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', (event) => {
    event.preventDefault();
    container.classList.remove("sign-up-mode");
});

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle sign-in form submission logic here
    // You can access form fields using signInForm.elements
});

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle sign-up form submission logic here
    // You can access form fields using signUpForm.elements
});
