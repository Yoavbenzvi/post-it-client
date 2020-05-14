import { TOGGLE_MODAL_ON, TOGGLE_MODAL_OFF } from '../actions/constants';

const initialState = {
	modal: false
} 

export default (state = initialState, { type, payload }) => {
	switch(type) {
		case TOGGLE_MODAL_OFF:
			return {...state, modal: false};
		case TOGGLE_MODAL_ON:
			return {...state, modal: true};
		default:
			return state;
	}
}