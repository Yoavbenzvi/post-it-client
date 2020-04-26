import React from 'react';
import SearchResults from '../components/SearchResults/SearchResults';


const Search = () => {
	return(
		<div className='w-screen flex justify-center'>
			<div>
				<form>
					<input className=' w-100 border rounded w-full py-2 px-3 text-gray-700 ' type="text" placeholder="input" />
				</form>
				<SearchResults />
			</div>
		</div>
	)
}

export default Search;