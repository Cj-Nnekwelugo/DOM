const contactForm = document.getElementById("contact-form");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone-number");
const modal = document.getElementById("modal");
const errorMessageElement = document.getElementById("message");
const closeButton = document.getElementById("close-btn");

function displayErrorMessage(message) {
    modal.style.display = "block";
    errorMessageElement.textContent = `Error processing request: ${message}`;
}

function handleHideModalElement() {
    modal.style.display = "none";
    errorMessageElement.textContent = "";
}

function clearFormData() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    phoneNumberInput.value = "";
}