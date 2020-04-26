import React from 'react';
import NavIcon from './NavIcon';

const Navbar = () => {
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
					path='/main/profile'
					content='Profile'
				/>
				<NavIcon 
					css='p-2 cursor-pointer hover:bg-red-100'
					path='/main/search'
					content='Search'
				/>
			</div>
			<div className='h-screen flex items-end'>
				<div className='p-2 cursor-pointer hover:bg-red-100'>
					Logout
				</div>
			</div>
		</div>
	);
}

export default Navbar;

