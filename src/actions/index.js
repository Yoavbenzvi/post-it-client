import {
	SIGN_IN,
	SIGN_OUT,
	SET_VIEWED_USER,
	GET_USER_POSTS,
	GET_ALL_POSTS
} from './constants';

export const signIn = (payload) => ({
	type: SIGN_IN,
	payload
});

export const signOut = () => ({
	type: SIGN_OUT
});

export const setViewedUser = (payload) => ({
	type: SET_VIEWED_USER,
	payload
});

export const getAllPosts = () => async (dispatch) => {
	//to add a fetch function

	dispatch({type: GET_ALL_POSTS, payload: ['all the posts']})
}

export const getUserPosts = (email) => async (dispatch) => {
	//to add a fetch function

	dispatch({type: GET_USER_POSTS, payload: ['user posts']})
}


