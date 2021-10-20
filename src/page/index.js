import { Card } from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";

import "../page/index.css";

import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithSubmit } from "../components/PopupWithSumbit.js";
import { Section } from "../components/Section.js";
import logoSrc from "../images/logo.svg";
import { inputAbout, inputName } from "../utils/constants.js";
import { cardTemplateSelector } from "../utils/constants.js";
import { openEdit } from "../utils/constants.js";
import { openAdd } from "../utils/constants.js";
import { objSettings } from "../utils/constants.js";
import { formAdd } from "../utils/constants.js";
import { profileForm } from "../utils/constants.js";
import { UserInfo } from "../components/UserInfo.js";
import { logoImg } from "../utils/constants";
import { api } from "../components/Api.js";
import { formAvatar } from "../utils/constants.js"
import { avatarOverlay } from "../utils/constants.js"






let userId

Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(([cardData, userData]) => {
        userId = userData._id
        createCard.renderItems(cardData)
        userInfo.setUserInfo({ userName: userData.name, userJob: userData.about, userAvatar: userData.avatar })
    })
    .catch((err) => {
        console.log(err)
    })


const userInfo = new UserInfo({
    nameSelector: ".profile__name",
    jobSelector: ".profile__about",
    avatarSelector: "profile-img"
});



logoImg.src = logoSrc;

const editFormValidator = new FormValidator(objSettings, profileForm);
const addCardFormValidator = new FormValidator(objSettings, formAdd);
const editPicFormValidator = new FormValidator(objSettings, formAvatar);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
editPicFormValidator.enableValidation();

const imageModal = new PopupWithImage(".popup-image");
imageModal.setEventListeners();


const popupEditProfileSubmit = document.getElementById('popup-edit-submit');
const popupEditAvatarSubmit = document.getElementById('popup-edit-pic-submit');
const popupAddCardSubmit = document.getElementById('popup-add-submit');
const popupDelModalSubmit = document.getElementById('popup-del-modal-submit');


const editModal = new PopupWithForm(".profile-edit-popup", (data) => {
    renderLoading(popupEditProfileSubmit, true)
    api.editUserInfo(data)
        .then(res => {
            userInfo.editUserInfo({
                userName: res.name,
                userJob: res.about
            });
            editModal.close();

        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupEditProfileSubmit.textContent = 'Save';
        })

});

const popupEditPic = new PopupWithForm(".popup-edit-pic", (data) => {
    renderLoading(popupEditAvatarSubmit, true)
    api.editUserAvatar(data.avatar)
        .then(res => {
            userInfo.setUserPic({ userAvatar: res.avatar });
            popupEditPic.close();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupEditAvatarSubmit.textContent = 'Save';
        })
})
avatarOverlay.addEventListener("click", () => {
    editPicFormValidator.resetValidation();
    popupEditPic.open();
})
popupEditPic.setEventListeners();

const confirmDelModal = new PopupWithSubmit(".popup-del-modal");

confirmDelModal.setEventListeners();


editModal.setEventListeners();

const generateCard = (data) => {
    const card = new Card({
        data,
        handleCardClick: (name, link) => {
            imageModal.open(name, link);
        },
        handleLikeIcon: (id) => {
            const isAlreadyLiked = card.isLiked()

            if (isAlreadyLiked) {
                api.dislikeCard(id)
                    .then(res => {
                        card.dislikeCard(res.likes)
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            } else {
                api.likeCard(id)
                    .then(res => {
                        card.likeCard(res.likes)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        handleDeleteCard: (id) => {

            confirmDelModal.open()

            confirmDelModal.setAction(() => {
                renderLoading(popupDelModalSubmit, true)
                api.deleteCard(id)
                    .then(res => {
                        console.log("card is deleted!", res)
                        card.removeCard()
                        confirmDelModal.close()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                    .finally(() => {
                        popupDelModalSubmit.textContent = 'Yes';
                    })
            })

        }
    }, cardTemplateSelector, userId);
    return card
};

const createCard = new Section({
        renderer: (data) => {
            const cardE = generateCard(data)
            createCard.addItem(cardE.getCardElement())
        },
    },
    ".gallery"
);

const renderLoading = (currentActiveButton, isLoading = false) => {
    currentActiveButton.textContent = isLoading ? 'Saving...' : 'Saved';
};


const addCardModal = new PopupWithForm(".popup-add", (data) => {
    renderLoading(popupAddCardSubmit, true)

    api.createCard(data)
        .then(res => {
            const card = generateCard(res);
            createCard.addItem(card.getCardElement());
            addCardModal.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupAddCardSubmit.textContent = 'Create';
        })
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