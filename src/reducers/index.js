import { combineReducers } from 'redux';
import authReducer from './auth.js';

const reducer = combineReducers({
    auth: authReducer
});

export default reducer;