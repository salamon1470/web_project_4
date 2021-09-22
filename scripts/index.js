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
const profileForm = document.getElementById("form-profile");
const formAdd = document.getElementById("form-add");
const popupImg = document.querySelector(".popup-image");

if (popupProfileEdit.classList.contains("popup_visible")) {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

function openPopup(popup) {
    popup.classList.add("popup_visible");
    const visiblePopup = document.querySelector(".popup_visible");
    document.addEventListener('click', closeModalByOverlay);
    document.addEventListener("keydown", function closePopupKey(e) {
        if (e.key == "Escape") {
            closePopup(visiblePopup);
        };
    });
}

function closePopup(popup) {
    popup.classList.remove("popup_visible");
    document.removeEventListener('click', closeModalByOverlay);
    const visiblePopup = document.querySelector(".popup_visible");
    document.removeEventListener("keydown", function closePopupKey(e) {
        if (e.key == "Escape") {
            closePopup(visiblePopup);
        };
    });
}

const closeModalByOverlay = (e) => {
    const visiblePopup = document.querySelector(".popup_visible");

    if (!e.target.closest(".popup__container")) {
        closePopup(visiblePopup);
    }
};

function openProfilePopup(e) {
    e.stopPropagation();
    openPopup(popupProfileEdit);
}

function handleProfileFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(popupProfileEdit);
}

closeEdit.addEventListener("click", (e) => {
    e.stopPropagation();
    closePopup(popupProfileEdit);
});

profileForm.addEventListener('submit', handleProfileFormSubmit);


openEdit.addEventListener("click", openProfilePopup);

openAdd.addEventListener("click", (e) => {
    e.stopPropagation();
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
    const galleryImage = cardElement.querySelector(".gallery__img");
    galleryImage.addEventListener("click", (e) => {
        e.stopPropagation();
        popupImg.style.backgroundcolor = "rgba(0, 0, 0, 0.9)";
        const clickImage = document.querySelector(".popup-image__picture");
        clickImage.src = galleryImage.src;
        clickImage.alt = galleryImage.alt;
        const imageCaption = document.querySelector(".popup-image__caption");
        imageCaption.textContent = clickImage.alt;
        openPopup(popupImg);
    });
    cardsContainer.prepend(cardElement);
}

initialCards.forEach((item) => {
    createCard(item.name, item.link);
});

function addFormSubmit(event) {
    event.preventDefault();
    const gallerySrc = inputLink.value;
    const galleryName = inputTitle.value;
    createCard(galleryName, gallerySrc);
    closePopup(popupAdd);
    document.getElementById("form-add").reset();
}

const popupImgClose = document.querySelector(".popup-image__close-btn");
popupImgClose.addEventListener("click", () => closePopup(popupImg));