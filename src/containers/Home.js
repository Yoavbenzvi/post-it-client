import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Feed from '../components/Feed/Feed';

	const renderInputField = ({ input }) => {
		return(
			<div>
				<div className='flex justify-center'>
					<textarea 
						{...input}
						rows='4'
						className='w-1/2 self-center border-2 border-md border-gray-600 bg-white text-center h-10 px-5 pr-16  text-sm focus:outline-none' 
						type='textarea' 
						placeholder="Write a new post..." 
					/>
				</div>
				<div className='flex justify-center'>
					<button 
						className='m-2 w-1/6 rounded shadow-md shadow bg-blue-500 text-white hover:bg-blue-400'
						type='submit  '
					>
						Post
					</button>
				</div>
			</div>
		)
	}

const Home = () => {

	return(
		<div className='w-full flex justify-center p-2'>
			<div className='w-full flex flex-col'>
				<Field name='content' component={renderInputField}/>
				<Feed/>
			</div>
		</div>
	)
}

const WrappedHome = reduxForm({
	form: 'writePost'
})(Home);

const mapStateToProps = (state) => ({
	currentUser: state.currentUserReducer.data
})

export default connect(mapStateToProps)(WrappedHome)