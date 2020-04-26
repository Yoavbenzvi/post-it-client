import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
	return(
		<div class="w-full max-w-xs">
			<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
						Enter Email
					</label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
						Pick a Username
					</label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
				</div>
				<div class="mb-6">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="password">
						Password
					</label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
				</div>
				<div class="flex items-center justify-between">
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
					Sign In
					</button>
					<Link to='/' class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
						Sign In
					</Link>
				</div>
			</form>
		</div>
	)
}

export default SignUp;