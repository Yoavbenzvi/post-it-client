import React from 'react';
import { connect } from 'react-redux'; 

const ProfileDetails = ({ viewedUser }) => {
	return(
		<div className="p-0 m-4 md:w-4/5 lg:p-8 lg:w-1/2">
			<div className="shadow-xl rounded-lg">
				<div className="h-32 bg-gray-200 bg-cover bg-center rounded-t-lg flex items-center justify-center"> 
				</div>
				<div className="bg-white rounded-b-lg px-8">
					<div className="relative">				 
						<svg className="left-0 w-16 h-16 bg-white rounded-full mr-4 shadow-lg absolute -mt-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
					</div>
					<div className="pt-8 pb-8">
						<h1 className="text-2xl font-bold text-gray-700">{viewedUser.name}</h1>
						<p className="text-sm text-gray-600">Joined {viewedUser.joined}</p>
						<p className="text-sm text-gray-600">{viewedUser.posts.length} Posts</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	viewedUser: state.viewedUserReducer.viewedUser
})

export default connect(mapStateToProps)(ProfileDetails);
