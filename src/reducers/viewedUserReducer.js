import { SET_VIEWED_USER } from '../actions/constants';

const initialState = {
	data: null
}

export default (state = initialState, { type, payload }) => {
	switch(type) {
		case SET_VIEWED_USER:
			return {...state, viewedUser: payload};
		default:
	}		return state;
}