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
export const inputName = document.getElementById("name");
export const inputAbout = document.getElementById("about-me");
export const logoImg = document.getElementById("logo");
export const formAvatar = document.querySelector(".popup-edit-pic__form")
export const avatarOverlay = document.querySelector(".img-div")

export const cardTemplateSelector = document.getElementById("#card-template");

document.querySelector(".popup__container").style.cursor = "default";
document.querySelector(".profile-edit-popup__container").style.cursor = "default";
document.querySelector(".popup-add__container").style.cursor = "default";
document.querySelector(".popup-image__container").style.cursor = "default";
document.querySelector(".popup-del-modal__container").style.cursor = "default"; // styles for popups