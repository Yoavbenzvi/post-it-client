import {
	SIGN_IN,
	SIGN_OUT,
	SET_VIEWED_USER,
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