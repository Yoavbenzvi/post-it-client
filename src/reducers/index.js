import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import currentUserReducer from './signInOutReducer';
import viewedUserReducer from './viewedUserReducer';
import feedReducer from './feedReducer';

export default combineReducers({
	formReducer,
	currentUserReducer,
	viewedUserReducer, 
	feedReducer,
})