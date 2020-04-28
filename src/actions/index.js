import baseURL from '../api/axios';

import {
	SIGN_IN,
	SIGN_OUT,
	SET_VIEWED_USER,
	GET_USER_POSTS,
	GET_ALL_POSTS,
} from './constants';

export const signIn = (payload) => ({
	type: SIGN_IN,
	payload
});

export const signOut = () => ({
	type: SIGN_OUT
});

export const setViewedUser = (email) => async (dispatch) => {

	try {
		const response = await baseURL.get('/users');
		// THIS IS SUPPOSED TO BE DONE IN THE BACKEND
		const user = await response.data.find(user => user.email === email)
		//
		dispatch({type: SET_VIEWED_USER, payload: user})
	} catch(err) {
		//do something here
	}

};

export const getAllPosts = () => async (dispatch) => {										

	try {
		const response = await baseURL.get('/posts' /* will probably be a different endpoint */)
		dispatch({type: GET_ALL_POSTS, payload: response.data})
	} catch(err) {
		//do something with error
	}

}

export const getUserPosts = (email) => async (dispatch) => {

	try {
		const response = await baseURL.get('/posts' /* will probably be a different endpoint */);
		// THIS IS SUPPOSED TO BE DONE IN THE BACKEND
		const filteredResponse = response.data.filter(post => post.email === email)
		//
		dispatch({type: GET_USER_POSTS, payload: filteredResponse /*should be response.data*/})
	} catch(err) {
		//do something with error
	}
}




