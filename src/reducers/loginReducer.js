import * as actionTypes from '../actions/actionTypes';

const intialState = {
    loggedIn: false,
    sessionData: null,
    loginData: null,
    loading: true
}

const loginReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_LOGIN:
            return {
                ...currentState,
                loggedIn: action.loggedIn,
                loginData: action.loginData
            }

        case actionTypes.ON_LOGOUT:
            return {
                ...currentState,
                loggedIn: action.loggedIn,
                loginData: action.loginData
            }

        default:
            return currentState
    }
}

export default loginReducer;