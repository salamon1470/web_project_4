import { Popup } from "./Popup.js";
import { popupImg } from "../utils/constants.js";

export class PopupWithImage extends Popup {

    open(name, link) {
        const imageElement = this._popupElement.querySelector(
            ".popup-image__picture"
        );
        const captionElement = this._popupElement.querySelector(
            ".popup-image__caption"
        );
        popupImg.style.backgroundcolor = "rgba(0, 0, 0, 0.9)";
        imageElement.src = link;
        imageElement.alt = name;
        captionElement.textContent = name;
        super.open();
    }

}