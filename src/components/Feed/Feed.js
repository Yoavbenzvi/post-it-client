import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { getAllPosts } from '../../actions';
import Post from '../Post/Post';

class Feed extends React.Component {
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
					}).sort((a, b) => a - b).reverse().splice(0,51)
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);