import Strings from "../Strings";
const usersListKey = "UsersList";

function saveUser(user) {
    debugger; 

    var message = "";
    var userList = localStorage.getItem(usersListKey);

    if (userList) {
        var user = userList.find(x => x.email === user.email);

        if (user) {
            message = Strings.user_salved_already;
        } else {
            userList.push(user);
            message = Strings.user_saved_success;
        }
    } else {
        userList = [];
        userList.push(user);
        message = Strings.user_saved_success;
    }

    localStorage.setItem(usersListKey, JSON.stringify(userList));
    return message;
}

// function clearSession() {
//     localStorage.removeItem(usersListKey);
// }

// function getSession() {
//     return localStorage.getItem(usersListKey);
// }

export { saveUser };