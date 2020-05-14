import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { signIn, toggleModalOn } from "../../actions";
import baseURL from "../../api";

const style =
	"mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const error =
	"shadow appearance-none border border-red-500 bg-red-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

const renderEmailField = ({ input, meta }) => {
	return (
		<div className="mb-4">
			<label className="block text-gray-700 text-sm font-bold">
				Email
				<input
					{...input}
					className={meta.touched && meta.error ? error : style}
					type="email"
					placeholder="Enter username"
				/>
			</label>
			<div className="text-xs text-red-500">
				{meta.touched && meta.error ? meta.error : null}
			</div>
		</div>
	);
};

const renderPasswordField = ({ input, meta }) => {
	return (
		<div className="mb-8">
			<label className="block text-gray-700 text-sm font-bold">
				Password
				<input
					{...input}
					className={meta.touched && meta.error ? error : style}
					type="password"
					placeholder="Enter Password"
				/>
			</label>
			<div className="text-xs text-red-500">
				{meta.touched && meta.error ? meta.error : null}
			</div>
		</div>
	);
};

const SignIn = ({ handleSubmit, signIn, toggleModalOn }) => {
	const submitSignInForm = (formValues) => {
		baseURL
			.post("/login", {
				...formValues,
				email: formValues.email.toLowerCase(),
			})
			.then((response) => {
				signIn(response.data);
			})
			.catch((err) => toggleModalOn());
	};

	return (
		<div className="w-full max-w-xs">
			<form
				onSubmit={handleSubmit(submitSignInForm)}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 lg:mb-4"
			>
				<Field name="email" component={renderEmailField} />
				<Field name="password" component={renderPasswordField} />
				<div className="flex items-center justify-between">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 lg:py-2 px-2 lg:px-4 rounded focus:outline-none focus:shadow-outline">
						Sign In
					</button>
					<Link
						to="/register"
						title="Sign-in-link"
						className="inline-block align-baseline font-bold text-xs lg:text-sm text-blue-600 hover:text-blue-800"
						href="#"
					>
						Register First
					</Link>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = {
	signIn,
	toggleModalOn,
};

const validate = (formValues) => {
	const errors = {};

	if (!formValues.email) {
		errors.email = "Email is required";
	}

	if (!formValues.password) {
		errors.password = "Password is required";
	}

	return errors;
};

const WrappedSignIn = reduxForm({
	form: "signIn",
	validate,
})(SignIn);

export default connect(null, mapDispatchToProps)(WrappedSignIn);
