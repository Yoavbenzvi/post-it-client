import React from 'react';
import Feed from '../components/Feed/Feed';
import ProfileDetails from '../components/ProfileDetails/ProfileDetails';

const Profile = () => {
	return(
		<div className='w-full flex flex-col items-center'>
			<ProfileDetails />
			<Feed feed='profile'/>
		</div>
	)
}

export default Profile;