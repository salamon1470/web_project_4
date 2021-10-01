import { Card } from "./Card.js";

import FormValidator from "./FormValidator.js";

import { openPopup, popupImg, closePopup } from "./utils.js";

const objSettings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-btn",
    inactiveButtonClass: "popup__submit-btn_disabled",
    inputErrorClass: "popup__input_border_error",
    errorClass: "popup__input-errorMessage"
};

const profileForm = document.getElementById("form-profile");
const formAdd = document.getElementById("form-add");

const editFormValidator = new FormValidator(objSettings, profileForm)
const addCardFormValidator = new FormValidator(objSettings, formAdd)

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

const openEdit = document.querySelector(".profile__edit-btn");
const popupProfileEdit = document.querySelector(".profile-edit-popup");
const popupAdd = document.querySelector(".popup-add");
const openAdd = document.querySelector(".profile__add-btn");
const closeAdd = document.querySelector(".popup-add__close-btn");
const closeEdit = popupProfileEdit.querySelector('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const inputName = document.getElementById("name");
const inputAbout = document.getElementById("about-me");
const inputTitle = document.getElementById("title");
const inputLink = document.getElementById("image-link");


if (popupProfileEdit.classList.contains("popup_visible")) {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

function openProfilePopup() {
    editFormValidator.resetValidation();
    openPopup(popupProfileEdit);
}

function handleProfileFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(popupProfileEdit);
}

closeEdit.addEventListener("click", () => {
    closePopup(popupProfileEdit);
});

profileForm.addEventListener('submit', handleProfileFormSubmit);


openEdit.addEventListener("click", openProfilePopup);

openAdd.addEventListener("click", () => {
    addCardFormValidator.resetValidation();
    openPopup(popupAdd);
});


closeAdd.addEventListener("click", () => closePopup(popupAdd));
formAdd.addEventListener("submit", addFormSubmit);




const initialCards = [{
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
}, {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
}, {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
}, {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
}, {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
}, {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
}];

const cardsContainer = document.querySelector(".gallery");

function renderCard(card) {
    cardsContainer.prepend(card);
}


const cardTemplateSelector = document.getElementById('#card-template')

const createCard = (name, link, cardTemplateSelector) => {
    const card = new Card(name, link, cardTemplateSelector);
    const cardElement = card.getCardElement()
    renderCard(cardElement)
}

initialCards.forEach((item) => {
    createCard(item.name, item.link, cardTemplateSelector)
});

function addFormSubmit(event) {
    event.preventDefault();
    const link = inputLink.value;
    const name = inputTitle.value;
    createCard(name, link, cardTemplateSelector)
    closePopup(popupAdd);
    document.getElementById("form-add").reset();
}

const popupImgClose = document.querySelector(".popup-image__close-btn");
popupImgClose.addEventListener("click", () => closePopup(popupImg));