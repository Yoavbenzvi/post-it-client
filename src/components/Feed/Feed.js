import React from 'react';
import { connect } from 'react-redux';

class Feed extends React.Component {
	//props: user

	render() {
		return(
			<div>
				<div className='text-center p-2 m-2'>
					Post
				</div>
				<div className='text-center p-2 m-2'>
					Post
				</div>
				<div className='text-center p-2 m-2'>
					Post
				</div>
				<div className='text-center p-2 m-2'>
					Post
				</div>
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