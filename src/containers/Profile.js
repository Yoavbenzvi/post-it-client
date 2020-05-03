import React from 'react';
import { connect } from 'react-redux';
import { setViewedUser } from '../actions';
import history from '../history';
import Feed from '../components/Feed/Feed';
import Spinner from '../components/Spinner/Spinner'
import ProfileDetails from '../components/ProfileDetails/ProfileDetails';
import Modal from '../components/Modal/Modal'


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
			<React.Fragment>
				{this.props.modal ? <Modal /> : null}
				<div className='w-full flex flex-col items-center'>
					<ProfileDetails />
					<Feed/>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	viewedUser: state.viewedUserReducer.viewedUser,
	modal: state.modalReducer.modal
})

const mapDispatchToProps = {
	setViewedUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);