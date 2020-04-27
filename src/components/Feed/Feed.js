import React from 'react';
import { connect } from 'react-redux';
import Post from '../Post/Post';

class Feed extends React.Component {
	//props: user

	render() {
		return(
			<div className='m-2 border-t container'>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	//need to get only email
	currentUser: state.currentUser.data,
	viewedUser: state.viewedUser.data
})

const mapDispatchToProps = {
	//add an async action here
}

export default connect()(Feed);