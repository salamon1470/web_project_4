const customFetch = (url, headers) =>
    fetch(url, headers)
    .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getInitialCards() {
        return customFetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
    }

    getUserInfo() {
        return customFetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
    }

    createCard(data) {
        return customFetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify(data)
        })


    }

    deleteCard(cardId) {
        return customFetch(`${this._baseUrl}/cards/${cardId}`, {
            headers: this._headers,
            method: "DELETE",
        })

    }

    likeCard(cardId) {
        return customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: "PUT",
        })

    }

    dislikeCard(cardId) {
        return customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: "DELETE",
        })

    }

    editUserInfo(data) {
        return customFetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })

    }

    editUserAvatar(link) {
        return customFetch(`${this._baseUrl}/users/me/avatar `, {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                avatar: `${link}`
            })
        })

    }
}

export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
        authorization: "ed1619c1-357f-4bf4-a7c0-874397823a23",
        "Content-Type": "application/json"
    }
});


// "ed1619c1-357f-4bf4-a7c0-874397823a23"