import { SIGN_IN, SIGN_OUT } from '../actions/constants';


const initialState = {
	isLoggedIn: false,
	data: null
}

export default (state = initialState, { type, payload }) => {
	switch(type) {
		case SIGN_IN:
			return {...state, isLoggedIn: true, data: payload};
		case SIGN_OUT:
			return {...state, isLoggedIn: false, data: null };
		default:
	}		return state;
}