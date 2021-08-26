let openEdit = document.querySelector(".profile__edit-btn");
let popup = document.querySelector('.popup');
let closeEdit = popup.querySelector('.popup__close-btn');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let inputName = document.getElementById("name");
let inputAbout = document.getElementById("about-me");
let form = document.getElementById("form")

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
    event.preventDefault()
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup()
}


openEdit.addEventListener("click", openPopup);
closeEdit.addEventListener("click", closePopup);
form.addEventListener('submit', handleFormSubmit);