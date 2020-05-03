import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import WelcomeText from '../components/welcome-page/WelcomeText';
import SignIn from '../components/welcome-page/SignIn';
import SignUp from '../components/welcome-page/SignUp';
import Modal from '../components/Modal/Modal';
import { toggleModalOff } from '../actions';

const Welcome = ({ modal, toggleModalOff }) => {
	return(
		<div className='md:bg-blue-400 md:w-full md:h-full lg:h-screen lg:flex lg:justify-center lg:items-center'>
		{modal ? 
			<Modal 
				dismiss={toggleModalOff}
				header='Something went wrong!'
				body='Sorry, try again or check internet connection'
				button='OK'
				action={toggleModalOff}
			/> : null}
			<div className='max-h-screen flex flex-col lg:flex-row lg:w-4/5 lg:shadow-2xl'>
				<div className='w-full lg:w-4/12 bg-cus-4 flex justify-center shadow-md lg:shadow-cos1 z-10'>
					<WelcomeText />
				</div>
				<div className='md:h-screen lg:h-auto lg:w-8/12 bg-cus-1 z-0 flex justify-center items-center'>
					<Switch>
						<Route path='/register' component={SignUp} />			
						<Route path='/' component={SignIn} />
					</Switch>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	modal: state.modalReducer.modal
})

const mapDispatchToProps = {
	toggleModalOff
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);