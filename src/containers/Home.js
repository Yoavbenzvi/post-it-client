import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Feed from '../components/Feed/Feed';

const Home = () => {

	const renderInputField = ({ input }) => {
		return(
			<input 
				{...input}
				className='border border-black' 
				type='text' 
				placeholder='write'/>
		)
	}

	return(
		<div className='w-full flex justify-center'>
			<div className='w-full flex flex-col'>
				<Field name='content' component={renderInputField}/>
				<Feed feed='home'/>
			</div>
		</div>
	)
}

const WrappedHome = reduxForm({
	form: 'writePost'
})(Home);

const mapStateToProps = (state) => ({
	currentUser: state.currentUser.data
})

export default connect(mapStateToProps)(WrappedHome)