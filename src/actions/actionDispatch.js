import * as actionTypes from './actionTypes';

export const onLogIn = (loginData, loggedIn) => {
    return {
        type: actionTypes.ON_LOGIN,
        loggedIn: loggedIn,
        loginData: loginData
    };
};

export const onLogOut = () => {
    return {
        type: actionTypes.ON_LOGOUT,
        loggedIn: false,
        loginData: {}
    };
};

export const onLoadCompose = (value) => {
    return {
        type: actionTypes.ON_COMPOSE_LOAD,
        compose: value
    };
};

export const onLoadInbox = (mails, loggedIn) => {
    return {
        type: actionTypes.ON_LOAD_INBOX,
        loggedIn: loggedIn,
        mails: mails
    };
};

export const updateReadToStorage = (value) => {
    return {
        type: actionTypes.ON_UPDATE_READ,
        value: value
    };
};

export const loadSentEmails = (mails) => {
    return {
        type: actionTypes.ON_LOAD_SENT_MAIL,
        sentMails: mails
    };
};