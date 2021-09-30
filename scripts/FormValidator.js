class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
    }

    _showInputError = (inputElement, errorMessage) => {
        const { inputErrorClass, errorClass } = this._settings

        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(errorClass);;
    };

    _hideInputError = (inputElement) => {
        const { inputErrorClass, errorClass } = this._settings

        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(inputErrorClass);
        errorElement.classList.remove(errorClass);;
        errorElement.textContent = "";
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _setEventListeners = () => {
        const { inputSelector } = this._settings

        this.inputList = Array.from(this._formElement.querySelectorAll(inputSelector));

        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    _hasInvalidInput = () => this.inputList.some(inputElement => !inputElement.validity.valid);

    _toggleButtonState = () => {
        const { inactiveButtonClass, submitButtonSelector } = this._settings;
        const buttonElement = this._formElement.querySelector(submitButtonSelector);

        if (this._hasInvalidInput()) {
            buttonElement.classList.add(inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(inactiveButtonClass);
            buttonElement.disabled = false;
        }
    };

    resetValidation() {
        this.inputList.forEach(input => {
            this._hideInputError(input);
        });
    };

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    }
}

export default FormValidator;