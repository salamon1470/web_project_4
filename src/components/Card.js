export class Card {
    constructor({ data, handleCardClick, handleDeleteCard, handleLikeIcon }, templateCardSelector, userId) {
        this._link = data.link;
        this._name = data.name;
        this._templateCardSelector = templateCardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard;
        this._handleLikeIcon = handleLikeIcon;
        this._cardTemplate = document.querySelector("#card-template").content;
        this._id = data._id;
        this._userId = userId;
        this._ownerId = data.owner._id;
        this._likes = data.likes;
    }

    removeCard = () => {
        this._cardElement.remove();

        this._cardElement = null;
    };

    _setEventListeners() {
        const likeButton = this._cardElement.querySelector(".gallery__like");
        const removeCard = this._cardElement.querySelector(".gallery__trash");
        const galleryImage = this._cardElement.querySelector(".gallery__img");

        likeButton.addEventListener("click", () => this._handleLikeIcon(this._id));
        removeCard.addEventListener("click", () => this._handleDeleteCard(this._id));
        galleryImage.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link);
        });
    }


    isLiked() {
        return this._likes.some((person) => person._id === this._userId)
    }

    likeCard(newLikes) {
        this._likes = newLikes

        this._cardElement.querySelector(".gallery__likes-counter").textContent = this._likes.length

        this._cardElement.querySelector(".gallery__like").classList.add("gallery__like_liked")

    }

    dislikeCard(newLikes) {
        this._likes = newLikes

        this._cardElement.querySelector(".gallery__likes-counter").textContent = this._likes.length

        this._cardElement.querySelector(".gallery__like").classList.remove("gallery__like_liked")
    }

    getCardElement = () => {
        this._cardElement = this._cardTemplate
            .querySelector(".gallery__item")
            .cloneNode(true);
        const galleryImage = this._cardElement.querySelector(".gallery__img");
        galleryImage.src = this._link;
        this._cardElement.querySelector(".gallery__text").textContent = this._name;
        galleryImage.alt = this._name;

        this._setEventListeners();

        if (this._ownerId !== this._userId) {
            this._cardElement.querySelector(".gallery__trash").style.display = "none"
        }

        this._cardElement.querySelector(".gallery__likes-counter").textContent = this._likes.length

        if (this.isLiked()) {
            this.likeCard(this._likes)
        }

        return this._cardElement;
    };
}