import React from 'react';
import './Spinner.css'

const Spinner = () => {
	return(
		<div className='w-screen h-screen bg-white flex justify-center items-center'>
				<div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
		</div>
	)
}

export default Spinner;