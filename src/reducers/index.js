import { combineReducers } from 'redux';
import userInfo from './signInOutReducer';
import viewedUser from './viewedUserReducer';

export default combineReducers({
	currentUser: userInfo,
	viewedUser
})