import React from 'react';
import { connect } from 'react-redux';
import NavIcon from './NavIcon';
import { signOut, setViewedUser } from '../../actions';

const Navbar = ({ signOut, setViewedUser, currentUser }) => {

	const homeIcon = () => {
		return(
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="heroicon-ui" d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/></svg>
		)
	}

	const searchIcon = () => {
		return(
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
		)
	}

	const profileIcon = () => {
		return(
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
		)
	}
	const logoutIcon = () => {
		return(
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="heroicon-ui" d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/></svg>
		)
	}

	return(
		<div className='w-screen flex justify-between lg:w-auto lg:h-screen lg:inline-flex lg:flex-col sticky top-0 bg-white'>
			<div className='flex lg:flex-col'>
				<NavIcon 
					path='/main/home'
					content={homeIcon()}
				/>
				<button 
					onClick={() => setViewedUser(currentUser.email)}
					className='cursor-pointer hover:bg-red-100 w-8 lg:w-10 mx-1 py-1'
				>
					{profileIcon()}
				</button>
				<NavIcon 
					path='/main/search'
					content={searchIcon()}
				/>
			</div>
			<div className='flex items-end'>
				<NavIcon
					onClick={() => signOut()}
					path='/'
					content={logoutIcon()}
				/>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUserReducer.data	
})

const mapDispatchToProps = {
	signOut,
	setViewedUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

