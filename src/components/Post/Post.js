import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts, setViewedUser, deletePost } from '../../actions'
import baseURL from '../../api'
import history from '../../history';

const Post = ({ deletePost, setViewedUser, getAllPosts, currentUser, id, email, name, created, content, likes}) => {

	const showDelete = () => {
		if(currentUser.email === email)
		return(
			<button 
				onClick={() => deletePost(id)}
				className='ml-1 md:ml-2 w-4 h-4'
			>		
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path className="heroicon-ui w-4 h-4" d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"/>
				</svg>
			</button>
		)
	}

	return(
		<div className='text-s m-3 p-2 border-t-2'>
			<div className='flex items-end pb-1'>
				<svg 
					className='h-10 w-10 border rounded-full'
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 24 24"
				>
					<path 
						className="heroicon-ui" 
						d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
					/>
				</svg>
				<div className='font-bold text-xs bold mx-3'>
					{name}
				</div>
				<div className='text-2xs lg:text-xs text-gray-400 lg:mx-5'>
					{created.substring(0, 10)}
				</div>
				{showDelete()}
			</div>
			<div>
				<div className='p-4'>
					{content}
				</div>
				<div className='flex'>
					<div className='h-6 w-6'>
						<svg 
							className='fill-current text-red-500'
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 24 24"
						>
							<path 
								className="heroicon-ui" 
								d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"
							/>
						</svg>
					</div>
					<div className='text-center h-4 w-4'>
						{likes.length}
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUserReducer.data
})

const mapDispatchToProps = {
	getAllPosts,
	setViewedUser,
	deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);