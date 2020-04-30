import React from 'react';
import Logo from '../../logo_transparent.png'

const WelcomeText = () => {
	return(
		<div className='p-12 text-white mt-4'>
			<div className='p-2'>
				<div className='w-full flex justify-center'>
					<img src={Logo} className='w-48 h-48'/>
				</div>
				<div className='mb-6'>
					<h3 className='text-center font-bold'>Welcome to Post-It! </h3>
				</div>
				<p>
					Post-It is a simple and quick 
					app to let everybody know
					what's on your mind, what
					you're currently doing, 
					or anything else you can think of!
				</p>
			</div>
		</div>
	)
}

export default WelcomeText;