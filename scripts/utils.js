export const popupImg = document.querySelector(".popup-image");
export const clickImage = document.querySelector(".popup-image__picture");
export const imageCaption = document.querySelector(".popup-image__caption");

export function openPopup(popup) {
    popup.classList.add("popup_visible");
    document.addEventListener('click', closeModalByOverlay);
    document.addEventListener("keydown", handleKeyDown);
};

export function closePopup(popup) {
    popup.classList.remove("popup_visible");
    document.removeEventListener('click', closeModalByOverlay);
    document.removeEventListener("keydown", handleKeyDown);
}

function handleKeyDown(e) {
    if (e.key == "Escape") {
        const visiblePopup = document.querySelector(".popup_visible");
        closePopup(visiblePopup);
    };
};

const closeModalByOverlay = (e) => {
    const visiblePopup = document.querySelector(".popup_visible");

    if (!e.target.closest(".popup__container")) {
        closePopup(visiblePopup);
    }
};