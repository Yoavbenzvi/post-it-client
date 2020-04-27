import React from 'react';

const ProfileDetails = () => {
	return(
<div className="p-8 w-1/2">
	<div className="shadow-xl rounded-lg">
		<div className="h-32 bg-gray-200 bg-cover bg-center rounded-t-lg flex items-center justify-center"> 
		</div>
		<div className="bg-white rounded-b-lg px-8">
			<div className="relative">				 
				<svg className="left-0 w-16 h-16 bg-white rounded-full mr-4 shadow-lg absolute -mt-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
			</div>
			<div className="pt-8 pb-8">
				<h1 className="text-2xl font-bold text-gray-700">Username</h1>
				<div className="flex justify-between w-32">
				<p className="text-sm text-gray-600">Joined</p>
				<p className="text-sm text-gray-600">X posts</p>
				</div>
				<div className="flex justify-start mt-4">
					<div className="flex justify-between w-32">
						<div className="material-icons">chat</div>
						<div className="material-icons">duo</div>
						<div className="material-icons">location</div>
					</div>		
				</div>
			</div>
		</div>
	</div>
</div>
	)
}

export default ProfileDetails;
