import React from "react";
import Logo from "../../logo_transparent.png";

const WelcomeText = () => {
	return (
		<div className="lg:p-12 text-white mt-4">
			<div className="p-2 text-center">
				<div className="text-3xs lg:text-base w-full flex justify-center">
					<img
						src={Logo}
						alt="Post-It-Logo"
						className="w-24 h-24 lg:w-48 lg:h-48"
					/>
				</div>
				<div className="mb-2 lg:mb-6">
					<h3 className=" font-bold">Welcome to Post-It! </h3>
				</div>
				<p className="lg:text-left">
					Post-It is a simple and quick app to let everybody know what's on
					your mind, what you're currently doing, or anything else you can
					think of!
				</p>
			</div>
		</div>
	);
};

export default WelcomeText;
