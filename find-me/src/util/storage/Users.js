import Strings from "../Strings";
import CryptoJS from "crypto-js";

const SECRET_KEY = "secret-key-find-me-16-56";
const USERS_LIST_KEY = "UsersList";

function saveUser(userData) {
    var message = "";
    var userList = localStorage.getItem(USERS_LIST_KEY);

    if (!userList) {
        userList = [];
    } else {
        userList = JSON.parse(userList);
    }

    var user = userList.find(x => x.email === userData.email);

    if (user) {
        message = Strings.user_salved_already;
    } else {
        userData.password = encryptPassword(userData.password);
        userList.push(userData);
        message = Strings.user_saved_success;
    }

    localStorage.setItem(USERS_LIST_KEY, JSON.stringify(userList));
    return message;
}

function findUser(email, password) {
    var userList = JSON.parse(localStorage.getItem(USERS_LIST_KEY));
    var user = userList.find(x => x.email === email);

    if (!user) {
        return null;
    }

    // check password...
    var passwordDecrypted = decryptPassword(user.password);
    if (passwordDecrypted === password) {
        return user;
    }
    return null;
}

function findUserByEmail(email) {
    var userList = JSON.parse(localStorage.getItem(USERS_LIST_KEY));
    var user = userList.find(x => x.email === email);
    return user;
}

function encryptPassword(pass) {
    var encrypt = CryptoJS.AES.encrypt(pass, SECRET_KEY).toString()
    return encrypt;
}

function decryptPassword(encrypted) {
    var bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    var decrypt = bytes.toString(CryptoJS.enc.Utf8);
    return decrypt;
}

function updateUser(oldEmail, newUser) {
    var user = findUserByEmail(oldEmail);
    newUser.password = user.password;

    var userList = JSON.parse(localStorage.getItem(USERS_LIST_KEY));
    var index = 0;

    for (var i = 0; i < userList.length; i++) {
        if (userList[i].email === oldEmail) {
            index = i;
        }
    }

    userList.splice(index, 1);
    userList.push(newUser);

    localStorage.removeItem(USERS_LIST_KEY);
    localStorage.setItem(USERS_LIST_KEY, JSON.stringify(userList));

    return newUser;
}

export { saveUser, findUser, findUserByEmail, updateUser };