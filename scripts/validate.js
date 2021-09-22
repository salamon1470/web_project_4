const showInputError = (inputElement, settings) => {
    const { inputErrorClass } = settings;
    const error = inputElement.validationMessage
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = error;
    inputElement.classList.add(inputErrorClass);
};

const hideInputError = (inputElement, settings) => {
    const { inputErrorClass } = settings;
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = "";

    inputElement.classList.remove(inputErrorClass);
};

const checkInputValidity = (inputElement, settings) => {
    if (inputElement.validity.valid) {
        hideInputError(inputElement, settings);
    } else {
        showInputError(inputElement, settings);
    }
};

function toggleButtonState(inputList, buttonElement, settings) {
    const isFormValid = inputList.every(input => input.validity.valid);
    const { inactiveButtonClass } = settings;

    if (isFormValid) {
        buttonElement.disabled = false;
        buttonElement.classList.remove(inactiveButtonClass);
    } else {
        buttonElement.disabled = "disabled";
        buttonElement.classList.add(inactiveButtonClass);
    }
};

const enableValidation = (settings) => {
    const { formSelector, inputSelector, submitButtonSelector, ...rest } = settings;


    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        const inputList = Array.from(formElement.querySelectorAll(inputSelector));
        const buttonElement = formElement.querySelector(submitButtonSelector);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                checkInputValidity(inputElement, rest);
                toggleButtonState(inputList, buttonElement, rest);

            })
        })
        toggleButtonState(inputList, buttonElement, rest);
    });
};
const objSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-btn",
    inactiveButtonClass: "popup__submit-btn_disabled",
    inputErrorClass: "popup__input_border_error",
    errorClass: "popup__input-errorMessage"
}

enableValidation(objSettings);