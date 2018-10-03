import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import mailReducer from './mailReducer';

const ampleReducer = combineReducers({
    loginData: loginReducer,
    mailData: mailReducer
});

export default ampleReducer;