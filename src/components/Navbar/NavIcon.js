import React from 'react';
import { Link } from 'react-router-dom';

const NavIcon = ({ content, path, onClick = null }) => {

	return(
		<Link 
			onClick={onClick} 
			to={`${path}`} 
			className={'cursor-pointer sm:border-b-8 lg:border-b-0 lg:border-r-8 border-cus-1 hover:border-cus-5 lg:w-12 w-8 ml-1 py-1'}
		>
			{content}
		</Link>
	);
}

export default NavIcon;