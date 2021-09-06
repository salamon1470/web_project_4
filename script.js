let openEdit = document.querySelector(".profile__edit-btn");
let popup = document.querySelector('.popup');
const popupAdd = document.querySelector(".popup-add");
const openAdd = document.querySelector(".profile__add-btn");
const closeAdd = document.querySelector(".popup-add__close-btn");
let closeEdit = popup.querySelector('.popup__close-btn');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let inputName = document.getElementById("name");
let inputAbout = document.getElementById("about-me");
let inputTitle = document.getElementById("title");
let inputLink = document.getElementById("image-link");
let form = document.getElementById("form");
const formAdd = document.getElementById("form-add");
let galleryImg = document.querySelector(".gallery__img");
let imgName = document.querySelector(".gallery__text");
let popupImg = document.querySelector(".popup-image");



if (popup.classList.contains("popup_visible")) {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}


function openPopup() {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    popup.classList.toggle("popup_visible");
}

function closePopup() {
    popup.classList.toggle("popup_visible");
}

function handleFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup();
}


openEdit.addEventListener("click", openPopup);
closeEdit.addEventListener("click", closePopup);
form.addEventListener('submit', handleFormSubmit);

function openPopupAdd() {
    popupAdd.classList.toggle("popup-add_visible");
}

function closePopupAdd() {
    popupAdd.classList.toggle("popup-add_visible");
}

openAdd.addEventListener("click", openPopupAdd);
closeAdd.addEventListener("click", closePopupAdd);
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
        if (likeButton.classList.contains("gallery__like_liked")) {
            likeButton.classList.remove("gallery__like");
        } else {
            likeButton.classList.add("gallery__like");
        }
    });
    const removeCard = cardElement.querySelector(".gallery__trash");
    removeCard.addEventListener("click", function removeItem() {
        cardElement.remove();
    });
    let galleryImage = cardElement.querySelector(".gallery__img");
    galleryImage.addEventListener("click", function popupPicture() {
        popupImg.classList.toggle("popup-image_visible");
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
    closePopupAdd();
}

let popupImgClose = document.querySelector(".popup-image__close-btn");
popupImgClose.addEventListener("click", function togglePopupPic() {
    popupImg.classList.toggle("popup-image_visible");
});