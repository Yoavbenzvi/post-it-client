import axios from 'axios';

export default axios.create({
	baseURL: 'https://post-it-app-backend.herokuapp.com/'
});