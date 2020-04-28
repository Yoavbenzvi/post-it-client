import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { getUserPosts, getAllPosts } from '../../actions';
import Post from '../Post/Post';

class Feed extends React.Component {

	componentDidMount() {
		if(history.location.pathname === '/main/home') {
			this.props.getAllPosts()
		} else {
			getUserPosts(this.props.viewedUser.email)
		}
	}

	renderPosts = () => {
		return this.props.feed.map(post => {
			//to put in actuall Post with all props
			return <Post 
				key={post.id}
				name={post.name}
				created={post.created}
				content={post.content}
				likes={post.likes}
				email={post.email}
			/>
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
	viewedUser: state.viewedUserReducer.viewedUser,
	feed: state.feedReducer.feed
})

const mapDispatchToProps = {
	getAllPosts,
	getUserPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);