import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userInfo from './signInOutReducer';
import viewedUser from './viewedUserReducer';

export default combineReducers({
	form: formReducer,
	currentUser: userInfo,
	viewedUser
})