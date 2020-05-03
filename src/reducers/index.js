import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import currentUserReducer from './signInOutReducer';
import viewedUserReducer from './viewedUserReducer';
import feedReducer from './feedReducer';
import modalReducer from './modalReducer';

export default combineReducers({
	form: formReducer,
	currentUserReducer,
	viewedUserReducer, 
	feedReducer,
	modalReducer
})