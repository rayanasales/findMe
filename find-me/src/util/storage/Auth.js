const userDataKey = "CurrentLoggedUser";

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

function getSession() {
    return localStorage.getItem(userDataKey);
}

function refreshSession(newUser) {
    var token = JSON.parse(getSession()).token;
    setSession(newUser.email, token);
}

export { setSession, clearSession, getSession, refreshSession };