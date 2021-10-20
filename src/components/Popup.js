import { popupImgClose } from "../utils/constants";
export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this.close = this.close.bind(this);
    }

    open() {
        this._popupElement.classList.add("popup_visible");
        this._popupElement.addEventListener("click", this._closeModalByOverlay);
        document.addEventListener("keyup", this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove("popup_visible");
        this._popupElement.removeEventListener("click", this._closeModalByOverlay);
        document.removeEventListener("keyup", this._handleEscClose);
    }

    setEventListeners() {
        this._popupElement
            .querySelector(".popup__close-btn")
            .addEventListener("click", this.close);
        popupImgClose.addEventListener("click", this.close);
    }

    _closeModalByOverlay = (e) => {
        if (!e.target.closest(".popup__container") & (!e.target.closest(".popup-image__container"))) {
            this.close();
        }
    };

    _handleEscClose = (e) => {
        if (e.key === "Escape") {
            this.close();
        }
    };
}