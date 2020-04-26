import React from 'react';
import { Route, Switch } from 'react-router-dom'
import WelcomeText from '../components/welcome-page/WelcomeText';
import SignIn from '../components/welcome-page/SignIn';
import SignUp from '../components/welcome-page/SignUp';

const Welcome = () => {
	return(
		<div className='flex w-screen h-screen'>
			<div className='w-8/12 bg-cus-1 z-0 flex justify-center items-center'>
				<Switch>
					<Route path='/register' component={SignUp} />			
					<Route path='/' component={SignIn} />
				</Switch>
			</div>
			<div className='w-4/12 bg-cus-4 flex justify-center shadow-cos1 z-10'>
				<WelcomeText />
			</div>
		</div>
	)
}

export default Welcome;