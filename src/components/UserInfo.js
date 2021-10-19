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
        };
    }

    setUserInfo({ userName, userJob, userAvatar }) {
        this._userName.textContent = userName;
        this._userJob.textContent = userJob;
        this._userAvatar.src = userAvatar
    }

    setUserPic({ userAvatar }) {
        this._userAvatar.src = userAvatar;
    }
}