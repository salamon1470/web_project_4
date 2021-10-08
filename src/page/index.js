import { Card } from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";

import "../page/index.css";

import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import profileSrc from "../images/profileimg.jpg";
import logoSrc from "../images/logo.svg";
import { cardsContainer, inputAbout, inputName } from "../utils/constants.js";
import { initialCards } from "../utils/constants.js";
import { popupImgClose } from "../utils/constants.js";
import { cardTemplateSelector } from "../utils/constants.js";
import { openEdit } from "../utils/constants.js";
import { openAdd } from "../utils/constants.js";
import { objSettings } from "../utils/constants.js";
import { formAdd } from "../utils/constants.js";
import { profileForm } from "../utils/constants.js";
import { UserInfo } from "../components/UserInfo.js";
import { profileImg } from "../utils/constants";
import { logoImg } from "../utils/constants";

const userInfo = new UserInfo({
    nameSelector: ".profile__name",
    jobSelector: ".profile__about",
});

profileImg.src = profileSrc;

logoImg.src = logoSrc;

const editFormValidator = new FormValidator(objSettings, profileForm);
const addCardFormValidator = new FormValidator(objSettings, formAdd);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

const imageModal = new PopupWithImage(".popup-image");
imageModal.setEventListeners();

console.log();
const editModal = new PopupWithForm(".profile-edit-popup", (data) => {
    console.log(data);
    userInfo.setUserInfo(data);
});

editModal.setEventListeners();

const generateCard = (data) => {
    return new Card(data, cardTemplateSelector, (name, link) => {
        imageModal.open(name, link);
    });
};

const renderCard = (data, cardContainer) => {
    const card = generateCard(data);
    cardContainer.prepend(card.getCardElement());
};

const createCard = new Section({
        items: initialCards,
        renderer: (data) => {
            renderCard(data, cardsContainer);
        },
    },
    ".gallery"
);

createCard.renderItems();

const addCardModal = new PopupWithForm(".popup-add", (data) => {
    console.log(data.imageLink);
    const card = generateCard({
        link: data.imageLink,
        name: data.title,
    });
    createCard.addItem(card.getCardElement());
});

addCardModal.setEventListeners();

openEdit.addEventListener("click", () => {
    const data = userInfo.getUserInfo();
    inputName.value = data.name;
    inputAbout.value = data.job;
    editFormValidator.resetValidation();
    editModal.open();
});

openAdd.addEventListener("click", () => {
    addCardFormValidator.resetValidation();
    addCardModal.open();
});

popupImgClose.addEventListener("click", imageModal.close);