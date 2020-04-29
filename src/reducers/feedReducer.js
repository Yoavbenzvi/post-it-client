import { GET_USER_POSTS, GET_ALL_POSTS } from '../actions/constants';

const initialState = {
	feed: []
}

export default (state = initialState, { type, payload }) => {
	switch(type) {
		case GET_USER_POSTS:
			return {...state, feed: payload};
		case GET_ALL_POSTS:
			return {...state, feed: payload};
		default: 
			return state;
	}
}