import baseURL from '../api';
//WILL HAVE TO CHANGE URL IN ALL REQUESTS
import history from '../history';

import {
	SIGN_IN,
	SIGN_OUT,
	SET_VIEWED_USER,
	SET_FEED,
} from './constants';

export const signIn = (payload) => (dispatch) => {
	dispatch({type: SIGN_IN, payload})

	history.push('/main/home')
};

export const signOut = () => ({
	type: SIGN_OUT
});

export const setViewedUser = (id) => async (dispatch) => {

	try {
		const userResponse = await baseURL.get(`/get-user-info/${id}`)
		const response = await baseURL.get(`/get-user-posts/${id}`)
		dispatch({type: SET_VIEWED_USER, payload: userResponse.data})
		dispatch({type: SET_FEED, payload: response.data})
	} catch(err) {
		//do something here
	}

};

export const getUserPosts = (email) => async (dispatch) => {										

	try {
		const response = await baseURL.get(`/get-user-posts/${email}`)
		dispatch({type: SET_FEED, payload: response.data})
	} catch(err) {
		//do something with error
	}

}

export const getAllPosts = () => async (dispatch) => {										

	try {
		const response = await baseURL.get('/get-all-posts')
		dispatch({type: SET_FEED, payload: response.data})
	} catch(err) {
		//do something with error
	}

}

export const deletePost = (postId) => async (dispatch) => {
	
	try {

		const response = await baseURL.delete(`/delete-post/${postId}`);
		dispatch({type: SET_FEED, payload: response.data})

	} catch(err) {
		//do something
	}
}

export const setFeed = (payload) => ({
	type: SET_FEED, payload
})





