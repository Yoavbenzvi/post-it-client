import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/Feed/Feed';
import Spinner from '../components/Spinner/Spinner'
import ProfileDetails from '../components/ProfileDetails/ProfileDetails';

const Profile = ({ viewedUser }) => {
	console.log(viewedUser === true)

	if(!viewedUser) {
		return <Spinner />
	}

	return(
		<div className='w-full flex flex-col items-center'>
			<ProfileDetails />
			<Feed/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	viewedUser: state.viewedUserReducer.viewedUser
})

export default connect(mapStateToProps)(Profile);