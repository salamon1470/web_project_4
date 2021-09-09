const openEdit = document.querySelector(".profile__edit-btn");
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector(".popup-add");
const openAdd = document.querySelector(".profile__add-btn");
const closeAdd = document.querySelector(".popup-add__close-btn");
const closeEdit = popup.querySelector('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
let inputName = document.getElementById("name");
let inputAbout = document.getElementById("about-me");
const inputTitle = document.getElementById("title");
const inputLink = document.getElementById("image-link");
const profileForm = document.getElementById("formprofile");
const formAdd = document.getElementById("form-add");
let galleryImg = document.querySelector(".gallery__img");
let imgName = document.querySelector(".gallery__text");
const popupImg = document.querySelector(".popup-image");
const popupProfileEdit = document.querySelector(".profile-edit-popup");


if (popup.classList.contains("popup_visible")) {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

function openPopup(popup) {
    popup.classList.add("popup_visible");
}

function closePopup(popup) {
    popup.classList.remove("popup_visible");
}

function openProfilePopup() {
    openPopup(popupProfileEdit);
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}



function handleProfileFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(popupProfileEdit);
}

closeEdit.addEventListener("click", () => closePopup(popupProfileEdit));

profileForm.addEventListener('submit', handleProfileFormSubmit);


openEdit.addEventListener("click", openProfilePopup);

openAdd.addEventListener("click", () => openPopup(popupAdd));
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

const cardContainer = document.querySelector(".gallery");

function createCard(name, link) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector(".gallery__item").cloneNode(true);
    cardElement.querySelector(".gallery__text").textContent = name;
    cardElement.querySelector(".gallery__img").src = link;
    cardElement.querySelector(".gallery__img").alt = name;
    const likeButton = cardElement.querySelector(".gallery__like");
    likeButton.addEventListener("click", function toggleLike() {
        likeButton.classList.toggle("gallery__like_liked");
    });
    const removeCard = cardElement.querySelector(".gallery__trash");
    removeCard.addEventListener("click", function removeItem() {
        cardElement.remove();
    });
    let galleryImage = cardElement.querySelector(".gallery__img");
    galleryImage.addEventListener("click", function popupPicture() {
        openPopup(popupImg)
        popupImg.style.backgroundcolor = "rgba(0, 0, 0, 0.9)";
        let clickImage = document.querySelector(".popup-image__picture");
        clickImage.src = galleryImage.src;
        clickImage.alt = galleryImage.alt;
        let imageCaption = document.querySelector(".popup-image__caption");
        imageCaption.textContent = clickImage.alt;
    });
    cardContainer.prepend(cardElement);
}

initialCards.forEach((item) => {
    createCard(item.name, item.link);
});

let imgDesc = document.querySelector(".gallery__img").alt;

function addFormSubmit(event) {
    event.preventDefault();
    galleryImg = inputLink.value;
    imgName = inputTitle.value;
    imgDesc = imgName;
    createCard(imgName, galleryImg);
    closePopup(popupAdd);
}

const popupImgClose = document.querySelector(".popup-image__close-btn");
popupImgClose.addEventListener("click", () => closePopup(popupImg));