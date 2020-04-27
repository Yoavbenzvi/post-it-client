import React from 'react';
import { connect } from 'react-redux';
import Post from '../Post/Post';

class Feed extends React.Component {
	//props: user

	render() {
		return(
			<div className='w-full'>
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

// const mapDispatchToProps = {
// 	//add an async action here
// }

export default connect(mapStateToProps)(Feed);