import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { setFeed, getAllPosts } from '../actions'
import baseURL from '../api';
import Feed from '../components/Feed/Feed';

const renderInputField = ({ input }) => {
	return(
		<div>
			<div className='rounded-md shadow-md bg-blue-300 p-4 flex flex-col container mx-auto'>
				<div className='flex justify-center'>
					<textarea 
						{...input}
						maxLength='60'
						className='focus:border-blue-300 shadow-md lg:w-1/2 md:w-4/5 self-center border-2 border-lg border-gray-300 bg-white text-center h-10 px-8 lg:px-16 text-sm focus:outline-none' 
						type='text' 
						placeholder="Write a new post..." 
					/>
				</div>
				<div className='flex justify-center'>
					<button 
						className='m-2 w-1/6 rounded shadow-md shadow bg-blue-500 text-white hover:bg-blue-400'
						type='submit'
					>
						Post
					</button>
				</div>
			</div>
		</div>
	)
}

//{ setFeed, resetForm, handleSubmit, reset, currentUser }

class Home extends React.Component {

	componentDidMount() {
		this.props.getAllPosts()
	}

	publishPost = (formValues) => {
		
		baseURL.post('/add-post', {
			email: this.props.currentUser.email,
			name: this.props.currentUser.name,
			content: formValues.content
		})
			.then(response => {
				this.props.reset('writePost');
				this.props.setFeed(response.data)
			})
			.catch(err => console.log('some error, add something here'))
	}

	render() {
		return(
			<div className='w-full flex justify-center p-2'>
				<div className='w-full flex flex-col'>
					<form
						onSubmit={this.props.handleSubmit(this.publishPost)}
					>
						<Field name='content' component={renderInputField}/>
					</form>
					<Feed/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUserReducer.data
})

const mapDispatchToProps = {
	reset,
	setFeed,
	getAllPosts
}

const WrappedHome = reduxForm({
	form: 'writePost',
	//validate
})(Home);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedHome)