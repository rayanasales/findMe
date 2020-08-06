import strings from "../strings";
import CryptoJS from "crypto-js";
import { getSession } from "./auth";

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
        message = strings.user_salved_already;
    } else {
        userData.password = encryptPassword(userData.password);
        userList.push(userData);
        message = strings.user_saved_success;
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

function updateUser(oldEmail, newUser, cameFromProfile) {
    var user = findUserByEmail(oldEmail);
    newUser.password = user.password;

    if (cameFromProfile) {
        newUser.favoritePlaces = user.favoritePlaces;
    }

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

function getAllUsers() {
    return JSON.parse(localStorage.getItem(USERS_LIST_KEY));
}

// -----------------------

function getCurrentUserData() {
    var userSession = JSON.parse(getSession());
    var emailCurrentUser = userSession.email;
    var allUsers = getAllUsers();
    var user = allUsers.find(x => x.email === emailCurrentUser);

    return user;
}

function insertFavoritePlace(place) {
    var user = getCurrentUserData();

    if (!user.favoritePlaces) {
        user.favoritePlaces = [];
    }
    user.favoritePlaces.push(place);
    updateUser(user.email, user, false);

    return;
}

function removeFavoritePlace(place) {
    var user = getCurrentUserData();

    // if user has only one fav place
    if (user.favoritePlaces.length === 1) {

        user.favoritePlaces = [];
        updateUser(user.email, user, false);
        return;
    }

    // else if user has many favs
    var likedPlaces = user.favoritePlaces;
    var index = 0;

    for (var i = 0; i < likedPlaces.length; i++) {
        if (likedPlaces[i].name === place.name) {
            index = i;
        }
    }

    likedPlaces.splice(index, 1);
    user.favoritePlaces = likedPlaces;
    updateUser(user.email, user, false);
}

function checkIsFavovitePlaceFromCurrentUser(place) {
    var likedPlaces = getCurrentUserFavoritesPlaces();
    if (!likedPlaces) {
        return false;
    }
    place = likedPlaces.find(x => x.name === place.name);
    return (place != null);
}

function getCurrentUserFavoritesPlaces() {
    var user = getCurrentUserData();
    return user.favoritePlaces;
}

export {
    saveUser, findUser, findUserByEmail, updateUser, insertFavoritePlace, removeFavoritePlace,
    checkIsFavovitePlaceFromCurrentUser, getCurrentUserFavoritesPlaces
};