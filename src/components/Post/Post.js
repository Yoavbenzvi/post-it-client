import React from 'react';

const Post = ({ name, created, content, likes}) => {
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
				<div className='text-xs text-gray-400 mx-5'>
					{created.substring(0, 10)}
				</div>
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

export default Post;