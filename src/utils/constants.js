export const popupImg = document.querySelector(".popup-image");
export const clickImage = document.querySelector(".popup-image__picture");
export const imageCaption = document.querySelector(".popup-image__caption");

export const profileForm = document.getElementById("form-profile");
export const formAdd = document.getElementById("form-add");

export const objSettings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-btn",
    inactiveButtonClass: "popup__submit-btn_disabled",
    inputErrorClass: "popup__input_border_error",
    errorClass: "popup__input-errorMessage",
};

export const openEdit = document.querySelector(".profile__edit-btn");

export const openAdd = document.querySelector(".profile__add-btn");
export const closeAdd = document.querySelector(".popup-add__close-btn");
export const closeEdit = document.querySelector(".popup__close-btn");
export const inputName = document.getElementById("name");
export const inputAbout = document.getElementById("about-me");
export const popupImgClose = document.querySelector(".popup-image__close-btn");
export const profileImg = document.getElementById("profile-img");
export const logoImg = document.getElementById("logo");
export const formAvatar = document.querySelector(".popup-edit-pic__form")
export const avatarOverlay = document.querySelector(".img-div")

export const cardTemplateSelector = document.getElementById("#card-template");

export const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg",
    },
];


document.querySelector(".popup__container").style.cursor = "default";
document.querySelector(".popup-add__container").style.cursor = "default";
document.querySelector(".popup-image__container").style.cursor = "default";
document.querySelector(".popup-del-modal__container").style.cursor = "default"; // styles for popups