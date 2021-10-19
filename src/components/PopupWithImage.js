import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    open(name, link) {
        const imageElement = this._popupElement.querySelector(
            ".popup-image__picture"
        );
        const captionElement = this._popupElement.querySelector(
            ".popup-image__caption"
        );

        imageElement.src = link;
        captionElement.textContent = name;

        super.open();
    }
}