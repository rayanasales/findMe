const userDataKey = "UserData";

function setSession(email, token) {
    var data = {
        email: email,
        token: token
    };
    localStorage.setItem(userDataKey, JSON.stringify(data));
}

function clearSession() {
    localStorage.removeItem(userDataKey);
}

export { setSession, clearSession };