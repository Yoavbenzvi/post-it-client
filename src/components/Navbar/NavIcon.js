import React from 'react';
import { Link } from 'react-router-dom';

const NavIcon = ({ content, path }) => {

	return(
		<Link to={`${path}`} className={'cursor-pointer hover:bg-red-100 w-10 mx-1 py-1'}>
			{content}
		</Link>
	);
}

export default NavIcon;