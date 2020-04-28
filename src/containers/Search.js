import React from 'react';
import { Field, reduxForm } from 'redux-form';
import baseURL from '../api/axios'
import SearchResults from '../components/SearchResults/SearchResults';

class Search extends React.Component {

	state = {
		results: []
	}

	renderInputField = ({ input }) => {
		return(
			<div className="pt-2 relative mx-auto text-gray-600">
			   <input 
			  		{...input}
			      className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
			      type="text" 
			      placeholder="Search" 
			   />
			   <button 
			      type="submit" 
			      className="absolute right-0 top-0 mt-5 mr-4"
			   >
			   <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
			   </button>
			</div>
		)
	}

	onSearchSubmit = ({ searchTerm }) => {

		baseURL.get('/users')
			.then(response => {
				// THIS IS SUPPOSED TO BE DONE IN THE BACKEND
				const filteredResponse = response.data.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
				//
				filteredResponse.length > 0 ? 
				this.setState({ results: filteredResponse}) 
				:
				this.setState({results: []}); // <== CHANGE
			})
				.catch(err => console.log("sorry, there's an error!")) // Should do something here
	}

	render() {	
		return(
			<div className='w-full flex justify-center p-2'>
				<div>
					<form onSubmit={this.props.handleSubmit(this.onSearchSubmit)}>
						<Field name='searchTerm' component={this.renderInputField}/>
					</form>
					<SearchResults results={this.state.results}/>
				</div>
			</div>
		)
	}
}

export default reduxForm({
	form: 'searchUsers'
})(Search);