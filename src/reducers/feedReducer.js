import { SET_FEED, SIGN_OUT } from "../actions/constants";

const initialState = {
	feed: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_FEED:
			return { ...state, feed: payload };
		case SIGN_OUT:
			return { ...state, feed: [] };
		default:
			return state;
	}
};
