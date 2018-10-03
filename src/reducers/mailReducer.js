import * as actionTypes from '../actions/actionTypes';

const intialState = {
    mails: [],
    compose: false,
    read: 0,
    sentMail: [],
    inbox: true,
    ids: []
}

const loginReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_LOAD_INBOX:
            return {
                ...currentState,
                mails: action.mails,
                inbox: true
            }
        case actionTypes.ON_COMPOSE_LOAD:
            return {
                ...currentState,
                compose: action.compose
            }
        case actionTypes.ON_UPDATE_READ:
            return {
                ...currentState,
                read: action.value
            }
        case actionTypes.ON_LOAD_SENT_MAIL:
            return {
                ...currentState,
                sentMail: action.sentMails,
                inbox: false
            }
        default:
            return currentState
    }
}

export default loginReducer;