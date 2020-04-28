import { SET_VIEWED_USER } from '../actions/constants';

const fakeInitialState = {	
	"id": 1,
	"email": "dean@gmail.com",
	"name": "Dean",
	"joined": "20.04.2019",
	"posts": [1, 2]
}

const initialState = {
	viewedUser: fakeInitialState //SHOULD BE NULL!!!
}

export default (state = initialState, { type, payload }) => {
	switch(type) {
		case SET_VIEWED_USER:
			return {...state, viewedUser: payload};
		default:
	}		return state;
}