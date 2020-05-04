import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const UserCard = ({ id, email, name }) => {

	return(
		<div className="bg-white shadow-lg p-8 m-4 rounded-md">
			<div className="text-center mt-4">
				<p className="text-gray-600 font-bold">
					{name}
				</p>
			</div>
			<div className="flex justify-center mt-4">
				<svg className="shadow w-16 h-16 rounded-full border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
			</div>
			<div className="mt-6 flex justify-center">
				<Link 
					className="rounded shadow-md w-3/5 text-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
					to={`/main/profile/${id}`}
				>
					Go to profile
				</Link>
			</div>
		</div>
	)
}

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(UserCard);