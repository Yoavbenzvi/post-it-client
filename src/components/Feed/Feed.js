import React from "react";
import { connect } from "react-redux";
import Post from "../Post/Post";

class Feed extends React.Component {
	render() {
		return (
			<div className="block w-full py-2 lg:px-32">
				{this.props.feed
					.sort((a, b) => a.id - b.id)
					.reverse()
					.map((post) => {
						return (
							<Post
								key={post.id}
								id={post.id}
								name={post.name}
								created={post.created}
								content={post.content}
								likes={post.likes}
								email={post.email}
							/>
						);
					})
					.splice(0, 51)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	viewedUser: state.viewedUserReducer.viewedUser,
	feed: state.feedReducer.feed,
});

export default connect(mapStateToProps)(Feed);
