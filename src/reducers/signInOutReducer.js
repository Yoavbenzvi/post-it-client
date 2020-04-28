import { SIGN_IN, SIGN_OUT } from '../actions/constants';


const fakeInitialState = {	
	"id": 1,
	"email": "dean@gmail.com",
	"name": "Dean",
	"joined": "20.04.2019",
	"posts": [1, 2]
}

const initialState = {
	isLoggedIn: false,
	data: fakeInitialState //SHOULD BE NULL
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