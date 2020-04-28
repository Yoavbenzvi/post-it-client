import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { getUserPosts, getAllPosts } from '../../actions';
import Post from '../Post/Post';

class Feed extends React.Component {

	componentDidMount() {
		history.location.pathname === '/main/home' ?
		this.props.getAllPosts()
		:
		this.props.getUserPosts()
	}

	renderPosts = () => {
		return this.props.feed.map(post => {
			//to put in actuall Post with all props
			return <Post />
		})
	}

	render() {
		return(
			<div className='w-full'>
				{this.renderPosts()}
			</div>
		)
	}
	
}

const mapStateToProps = (state) => ({
	//need to get only email
	currentUser: state.currentUserReducer.data,
	viewedUser: state.viewedUserReducer.data,
	feed: state.feedReducer.feed
})

const mapDispatchToProps = {
	getAllPosts,
	getUserPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);