import * as actionDispatch from './actionDispatch';
import * as services from '../services';

export const logIn = (postData) => {
    this.prepareStorage(postData); 
    return dispatch => {
        dispatch(actionDispatch.onLogIn(postData, services.getInbox().length === 0 ? false : true));
    };
};

export const logOut = () => {
    this.prepareStorage();
    return dispatch => {
        dispatch(actionDispatch.onLogOut());
    }

}

export const loadMail = () => {
    let mails = services.getInbox();
    return dispatch => {
        dispatch(actionDispatch.onLoadInbox(typeof mails === "boolean" ? [] : mails, typeof mails === "boolean" ? false : true));
    }

}

this.prepareStorage = (data) => {
    if(data) {
        localStorage.setItem('loginData', JSON.stringify(data));
    } else {
        localStorage.removeItem('loginData');
    }
}


export const onLoadCompose = (value) => {
    return dispatch => {
        dispatch(actionDispatch.onLoadCompose(value));
    }

}

export const updateReadToStorage = (value) => {
    return dispatch => {
        dispatch(actionDispatch.updateReadToStorage(value));
    }

}

export const onLoadSentEmails = () => {
    return dispatch => {
        dispatch(actionDispatch.loadSentEmails(services.getSentItems()))
    }
}