import React from 'react';
import UserCard from './UserCard';

const SearchResults = ({ results }) => {

	const renderedResults = () => {
		return results.map(user => (
			<UserCard
				key={user.id} 
				id={user.id}
				email={user.email}
				name={user.name}
			/>))
	}

	return(
		<div className='w-1/3'>
			{renderedResults()}
		</div>
	)
}

export default SearchResults;