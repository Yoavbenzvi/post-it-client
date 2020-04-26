import React from 'react';
import { Field, reduxForm } from 'redux-form';
import SearchResults from '../components/SearchResults/SearchResults';


class Search extends React.Component {

	renderInputField = ({ input }) => {
		return(
			<input 
				{...input}
				className='border border-black' 
				type='text' 
				placeholder='search'/>
		)
	}

	render() {

		//to remove:
		console.log('search component props:',this.props)

		return(
			<div className='w-screen flex justify-center p-2'>
				<div>
					<form>
						<Field name='searchTerm' component={this.renderInputField}/>
					</form>
					<SearchResults />
				</div>
			</div>
		)
	}
}

export default reduxForm({
	form: 'searchUsers'
})(Search);