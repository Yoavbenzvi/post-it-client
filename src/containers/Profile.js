import React from 'react';
import Feed from '../components/Feed/Feed';
import ProfileDetails from '../components/ProfileDetails/ProfileDetails';

const Profile = () => {
	return(
		<div className='w-screen flex flex-col items-center'>

				<ProfileDetails />
				<Feed />

		</div>
	)
}

export default Profile;