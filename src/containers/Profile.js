import React from 'react';
import { connect } from 'react-redux';
import { setViewedUser } from '../actions';
import history from '../history';
import Feed from '../components/Feed/Feed';
import Spinner from '../components/Spinner/Spinner'
import ProfileDetails from '../components/ProfileDetails/ProfileDetails';

class Profile extends React.Component{

	componentDidMount() {
		const id = (history.location.pathname.substring(14))
		this.props.setViewedUser(id)
	}

	render() {
	const { viewedUser } = this.props;

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
}

const mapStateToProps = (state) => ({
	viewedUser: state.viewedUserReducer.viewedUser
})

const mapDispatchToProps = {
	setViewedUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);