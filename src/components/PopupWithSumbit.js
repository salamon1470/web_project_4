import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
    setAction(action) {
        this._formSubmitHandler = action
    }

    setEventListeners() {
        this._popupElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this._formSubmitHandler();
        });

        super.setEventListeners();
    }
}