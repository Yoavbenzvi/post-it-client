import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

const renderEmailField = ({ input }) => {
	return(
		<div className="mb-4">
			<label className="block text-gray-700 text-sm font-bold mb-2">
				Email
			</label>
			<input 
				{...input}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
				type="email" 
				placeholder="Enter username"
			/>
		</div>
	)
}

const renderPasswordField = ({ input }) => {
	return(
		<div className="mb-6">
			<label className="block text-gray-700 text-sm font-bold mb-2">
				Password
			</label>
			<input 
				{...input}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
				type="password" 
				placeholder="Enter Password"
			/>
		</div>
	)
}

const SignIn = () => {
	return(
		<div className="w-full max-w-xs">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 lg:mb-4">
				<Field name='email' component={renderEmailField} />
				<Field name='password' component={renderPasswordField} />
				<div className="flex items-center justify-between">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 lg:py-2 px-2 lg:px-4 rounded focus:outline-none focus:shadow-outline" type="button">
						Sign In
					</button>
					<Link to='/register' className="inline-block align-baseline font-bold text-xs lg:text-sm text-blue-500 hover:text-blue-800" href="#">
						Register First
					</Link>
				</div>
			</form>
		</div>
	)
}

const WrappedSignIn = reduxForm({
	form: 'signIn'
})(SignIn)

export default WrappedSignIn;