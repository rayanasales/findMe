// import { CognitoUserPool } from "amazon-cognito-identity-js";
// import Tracker from "./tracker";
// import Api from "./api";
// import Alert from "react-s-alert";
// import { hasAccess } from "./funcionalities";

// const userDataKey = "UserData";
// const ERRO_DESCONHECIDO_LABEL = "Erro ao listar funcionalidades.";

// const ENRIQUECIMENTO_PF_ROLE = "ENRIQUECIMENTO_PF", ENRIQUECIMENTO_PJ_ROLE = "ENRIQUECIMENTO_PJ", ENRIQUECIMENTO_ALVO_ROLE = "ALVO";
// const READ_RIGHT = "R";

// const poolData = {
//     UserPoolId: USER_POOL_ID, // eslint-disable-line no-undef
//     ClientId: CLIENTE_ID // eslint-disable-line no-undef
// };

// function setUserData(userData, funcionalities) {
//     // eslint-disable-next-line no-extra-boolean-cast
//     if (!Boolean(userData)) {
//         localStorage.removeItem(userDataKey);
//         return;
//     }

//     const oldUserData = getUserData();
//     const idToken = userData.idToken;
//     const userloginPayload = idToken.payload["cognito:username"];
//     const userNamePayload = userloginPayload.split("#@#");
//     const namePayload = idToken.payload.name;
//     const impersonate = userData.impersonate;

//     const currentUserData = {
//         isLogged: true,
//         idToken: idToken,
//         name: namePayload,
//         userlogin: userloginPayload,
//         company: userNamePayload[0],
//         username: userNamePayload[1],
//         funcionalities: funcionalities,
//         impersonate: impersonate
//     };

//     currentUserData.notChanged =
//         oldUserData.name === currentUserData.name &&
//         oldUserData.username === currentUserData.username &&
//         oldUserData.company === currentUserData.company &&
//         oldUserData.impersonate === currentUserData.impersonate;

//     localStorage.setItem(userDataKey, JSON.stringify(currentUserData));
// }

// function getDoneTutorial(userName) {
//     const strData = localStorage.getItem(`${userName}_doneTutorial`);
//     if (strData) {
//         return JSON.parse(strData);
//     }
//     return false;
// }

// function setDoneTutorial(userName) {
//     localStorage.setItem(`${userName}_doneTutorial`, JSON.stringify(true));
// }

// const defaultUserData = {
//     isLogged: false,
//     idToken: null,
//     notChanged: false,
//     userlogin: "",
//     company: "",
//     username: "",
//     email: "",
//     name: ""
// };

// function getUserData() {
//     const strData = localStorage.getItem(userDataKey);
//     if (strData) {
//         return JSON.parse(strData);
//     }
//     return defaultUserData;
// }

// function getDefaultRoute() {
//     const userData = getUserData();
//     var doneTutorial;
//     var defaultRoute = "/app/enriquecer/startGuide";

//     if (hasAccess(ENRIQUECIMENTO_ALVO_ROLE, READ_RIGHT)) {
//         defaultRoute = "/app/enriquecer/alvos";
//     }
//     if (hasAccess(ENRIQUECIMENTO_PJ_ROLE, READ_RIGHT)) {
//         defaultRoute = "/app/enriquecer/juridico";
//     }
//     if (hasAccess(ENRIQUECIMENTO_PF_ROLE, READ_RIGHT)) {
//         defaultRoute = "/app/enriquecer";
//     }

//     if (!userData.isLogged) {
//         return null;
//     }

//     doneTutorial = getDoneTutorial(userData.userlogin);

//     if (!doneTutorial) {
//         defaultRoute = "/app/enriquecer/startGuide";
//         setDoneTutorial(userData.userlogin);
//     }

//     return defaultRoute;
// }

// function logout() {
//     var userPool = new CognitoUserPool(poolData);
//     var cognitoUser = userPool.getCurrentUser();
//     if (cognitoUser != null) {
//         cognitoUser.signOut();
//     }
//     Tracker.registerEvent("MENU_LOGOUT_CLICK");
//     setUserData(null);
// }

// function refreshToken(cognitoUserData) {
//     var userPool = new CognitoUserPool(poolData);
//     var cognitoUser = userPool.getCurrentUser();

//     cognitoUser.refreshSession(cognitoUserData.refreshToken, (err, session) => {
//         if (err) {
//             return;
//         }

//         Api.getUserFuncionalities(user.idToken) // eslint-disable-line no-undef
//             .then(function (result) {
//                 var funcionalities = result.data;

//                 if (result.status != 200) {
//                     this.logout();
//                     Alert.error(ERRO_DESCONHECIDO_LABEL, {
//                         position: "top-right",
//                         effect: "slide"
//                     });
//                     return;
//                 }

//                 setUserData(session, funcionalities);
//             })
//             .catch(function (error) {
//                 console.log(error); // eslint-disable-line no-console
//             });
//     });
// }


// export { poolData, setUserData, getUserData, getDefaultRoute, logout, refreshToken };