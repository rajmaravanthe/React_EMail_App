import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ampleReducer from '../reducers';

const ampleStore = createStore(ampleReducer, applyMiddleware(thunk));

export default ampleStore;