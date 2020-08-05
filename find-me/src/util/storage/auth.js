const userDataKey = "CurrentLoggedUser";

function setSession(name, email, token) {
    var data = {
        name: name,
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
    setSession(newUser.name, newUser.email, token);
}

export { setSession, clearSession, getSession, refreshSession };