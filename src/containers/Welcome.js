import React from 'react';
import { Route, Switch } from 'react-router-dom'
import WelcomeText from '../components/welcome-page/WelcomeText';
import SignIn from '../components/welcome-page/SignIn';
import SignUp from '../components/welcome-page/SignUp';

const Welcome = () => {
	return(
		<div className='lg:bg-blue-400 lg:w-full lg:h-screen lg:flex lg:justify-center lg:items-center'>
			<div className='flex flex-col lg:flex-row lg:w-4/5 lg:shadow-2xl'>
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

export default Welcome;