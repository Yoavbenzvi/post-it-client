import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { getAllPosts, getUserPosts } from '../../actions';
import Post from '../Post/Post';

class Feed extends React.Component {

	componentDidMount() {
		if (history.location.pathname === '/main/home') {
			this.props.getAllPosts()
		} 
		else {
			this.props.getUserPosts(this.props.viewedUser.email)
		}
	}

	render() {
		return(
			<div className='w-full'>
				{
					this.props.feed.map(post => {
						return <Post 
							key={post.id}
							id={post.id}
							name={post.name}
							created={post.created}
							content={post.content}
							likes={post.likes}
							email={post.email}
						/>
					}).reverse().splice(0,51)
				}
			</div>
		)
	}
	
}

const mapStateToProps = (state) => ({
	viewedUser: state.viewedUserReducer.viewedUser,
	feed: state.feedReducer.feed
})

const mapDispatchToProps = {
	getAllPosts,
	getUserPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);