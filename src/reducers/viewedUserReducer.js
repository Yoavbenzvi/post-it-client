import { SET_VIEWED_USER, SIGN_OUT } from '../actions/constants';

const initialState = {
	viewedUser: null
}

export default (state = initialState, { type, payload }) => {
	switch(type) {
		case SET_VIEWED_USER:
			return {...state, viewedUser: payload};
		case SIGN_OUT:
			return {...state, viewedUser: null};
		default:
	}		return state;
}