import React from 'react';
import { Link } from 'react-router-dom'

const NavIcon = ({ content, css, path }) => {
	return(
		<Link to={`${path}`} className={`${css}`}>
			{content}
		</Link>
	);
}

export default NavIcon;