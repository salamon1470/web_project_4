export class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userJob = document.querySelector(jobSelector);
        this._userAvatar = document.getElementById(avatarSelector)
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            job: this._userJob.textContent,
            avatar: this._userAvatar.src
        };
    }

    setUserInfo({ userName, userJob, userAvatar }) {
        this._userName.textContent = userName;
        this._userJob.textContent = userJob;
        this._userAvatar.src = userAvatar
    }

    editUserInfo({ userName, userJob }) {
        this._userName.textContent = userName;
        this._userJob.textContent = userJob;
    }

    setUserPic({ userAvatar }) {
        this._userAvatar.src = userAvatar;
    }
}