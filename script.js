let openEdit = document.querySelector(".profile__edit-btn");
let popup = document.querySelector('.popup');
let closeEdit = popup.querySelector('.popup__close-btn');
let container = document.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let inputName = document.querySelector('.popup__input-name');
let inputAbout = document.querySelector('.popup__input-about');


function togglePopup() {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    popup.classList.toggle("popup_visible");
}

function handleFormSubmit(event) {
    event.preventDefault()
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
}


openEdit.addEventListener("click", togglePopup);
closeEdit.addEventListener("click", togglePopup);
container.addEventListener('submit', handleFormSubmit);
container.addEventListener('submit', togglePopup);