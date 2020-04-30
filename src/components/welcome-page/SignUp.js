import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

const renderEmailField = ({ input }) => {
	return(
		<div className="mb-4">
			<label className="block text-gray-700 text-sm font-bold mb-2">
				Enter your Email
			</label>
			<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username"/>
		</div>
	)
}

const renderPasswordField = ({ input }) => {
	return(
		<div className="mb-6">
			<label className="block text-gray-700 text-sm font-bold mb-2">
				Pick a Password
			</label>
			<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Enter password"/>
		</div>
	)
}

const renderUserNameField = ({ input }) => {
	return(
		<div className="mb-4">
			<label className="block text-gray-700 text-sm font-bold mb-2">
				Pick a Username
			</label>
			<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter username"/>
		</div>
	)
}



const SignUp = () => {
	return(
		<div className="w-full max-w-xs">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 lg:mb-4">
				<Field name='email' component={renderEmailField} />
				<Field name='username' component={renderUserNameField} />
				<Field name='password' component={renderPasswordField} />
				<div className="flex items-center justify-between">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Register
					</button>
					<Link to='/' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
						Sign In
					</Link>
				</div>
			</form>
		</div>
	)
}

const WrappedSignUp = reduxForm({
	form: 'signUp'
})(SignUp)

export default WrappedSignUp;