import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitHandler) {
        super(popupSelector);
        this._formSubmitHandler = formSubmitHandler;
        this._form = this._popupElement.querySelector(".popup__form");
    }

    _getInputValues() {
        const inputs = [...this._form.querySelectorAll(".popup__input")];
        const inputValues = {};

        inputs.forEach((input) => {
            inputValues[input.name] = input.value;
        });

        return inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (e) => {
            e.preventDefault();
            this._formSubmitHandler(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}