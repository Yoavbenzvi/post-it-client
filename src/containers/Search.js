import React from 'react';
import { Field, reduxForm } from 'redux-form';
import SearchResults from '../components/SearchResults/SearchResults';



const Search = () => {

	const renderInputField = ({ input }) => {
		return(
			<input 
				{...input}
				className='border border-black' 
				type='text' 
				placeholder='search'/>
		)
	}

	return(
		<div className='w-screen flex justify-center p-2'>
			<div>
				<form>
					<Field name='searchTerm' component={renderInputField}/>
				</form>
				<SearchResults />
			</div>
		</div>
	)
}

export default reduxForm({
	form: 'searchUsers'
})(Search);