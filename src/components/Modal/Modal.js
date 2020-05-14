import React from 'react';
import { connect } from 'react-redux';
import { toggleModalOff } from '../../actions';

const Modal = ({ header = 'Something went wrong!', body = 'Please refresh the page or sign in again', button = 'OK', toggleModalOff, dismiss = false, action = false}) => {
	return(
		<div 
			onClick={dismiss || toggleModalOff}
			className="bg-smoke-smoke h-screen w-full flex items-center justify-center fixed pin z-50 flex"
		>
			<div 
				onClick={e => e.stopPropagation()}
				className='bg-white border-none rounded md:w-3/5 lg:w-1/4 md:h-56 lg:h-64 flex flex-col'
			>
				<div className='bg-cus-4 md:p-2 lg:p-5 border-none rounded-t text-center font-bold text-white'>
					{header}
				</div>
				<div className='md:pt-4 lg:pt-8 md:h-24md: lg:h-32 m-2 text-center p-4'>
					{body}
				</div>
				<button 
					onClick={action || toggleModalOff}
					className='border shadow-md mx-24 bg-blue-500 hover:bg-blue-700 text-white font-bold sm:p-1 md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline'
				>
					{button}
				</button>
			</div>
		</div>
	)
}

const mapDispatchToProps = {
	toggleModalOff
};

export default connect(null, mapDispatchToProps)(Modal);


