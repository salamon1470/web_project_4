import { popupImg, clickImage, imageCaption } from "../utils/constants.js";

export class Card {
    constructor(data, templateCardSelector, handleCardClick) {
        this._link = data.link;
        this._name = data.name;
        this._templateCardSelector = templateCardSelector;
        this._handleCardClick = handleCardClick;
        this._cardTemplate = document.querySelector("#card-template").content;
    }

    _toggleLike = (evt) => {
        evt.target.classList.toggle("gallery__like_liked");
    };

    _removeItem = () => {
        this._cardElement.remove();
    };

    _setEventListeners() {
        const likeButton = this._cardElement.querySelector(".gallery__like");
        const removeCard = this._cardElement.querySelector(".gallery__trash");
        const galleryImage = this._cardElement.querySelector(".gallery__img");

        likeButton.addEventListener("click", this._toggleLike);
        removeCard.addEventListener("click", this._removeItem);
        galleryImage.addEventListener("click", (e) => {
            this._handleCardClick(this._name, this._link);
            e.stopPropagation();
            popupImg.style.backgroundcolor = "rgba(0, 0, 0, 0.9)";
            clickImage.src = galleryImage.src;
            clickImage.alt = galleryImage.alt;
            imageCaption.textContent = clickImage.alt;
        });
    }

    getCardElement = () => {
        this._cardElement = this._cardTemplate
            .querySelector(".gallery__item")
            .cloneNode(true);
        const galleryImage = this._cardElement.querySelector(".gallery__img");
        galleryImage.src = this._link;
        this._cardElement.querySelector(".gallery__text").textContent = this._name;
        this._cardElement.querySelector(".gallery__img").alt = this._name;

        this._setEventListeners();

        return this._cardElement;
    };
}