import React from 'react';
import NavIcon from './NavIcon';
import { signOut } from '../../actions';

const Navbar = ({ signOut }) => {
	return(
		<div className='p-1 h-screen inline-flex flex-col'>
			<div className='flex flex-col'>
				<NavIcon 
					css='p-2 cursor-pointer hover:bg-red-100' 
					path='/main/home'
					content='Home'
				/>
				<NavIcon 
					css='p-2 cursor-pointer hover:bg-red-100'
					path='/main/profile/id'
					content='Profile'
				/>
				<NavIcon 
					css='p-2 cursor-pointer hover:bg-red-100'
					path='/main/search'
					content='Search'
				/>
			</div>
			<div className='h-screen flex items-end'>
				<NavIcon
					onClick={() => signOut()}
					className='p-2 cursor-pointer hover:bg-red-100'
					path='/'
					content='Logout'
				/>
			</div>
		</div>
	);
}

const mapDispatchToProps = {
	signOut
}

export default Navbar;

