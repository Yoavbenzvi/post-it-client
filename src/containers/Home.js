import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import baseURL from '../api';
import Feed from '../components/Feed/Feed';

const renderInputField = ({ input }) => {
	return(
		<div>
			<div className='flex justify-center'>
				<textarea 
					{...input}
					maxLength='60'
					className='w-1/2 self-center border-2 border-md border-gray-600 bg-white text-center h-10 px-5 pr-16  text-sm focus:outline-none' 
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
	)
}

const Home = ({ resetForm, handleSubmit, reset, currentUser }) => {

	const publishPost = (formValues) => {
		//change url later

		baseURL.post('/posts', {
			
				"email": currentUser.email,
				"id": 9,
				"name": currentUser.name,
				"created": new Date(),
				content: formValues.content,
				"likes": []
			
		})
			//Should respond with all posts -
			// and change the feed in the store!
			.then(response => {
				reset('writePost')
			})
	}

	return(
		<div className='w-full flex justify-center p-2'>
			<div className='w-full flex flex-col'>
				<form
					onSubmit={handleSubmit(publishPost)}
				>
					<Field name='content' component={renderInputField}/>
				</form>
				<Feed/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUserReducer.data
})

const mapDispatchToProps = {
	reset,
}

const WrappedHome = reduxForm({
	form: 'writePost',
	//validate
})(Home);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedHome)