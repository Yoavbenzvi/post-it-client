import React from 'react';
import history from '../history';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Write from './Write';
import Search from './Search';
import Welcome from './Welcome';

import Navbar from '../components/Navbar/Navbar'

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div className='flex'>
					<Route path='/' exact component={Welcome}/>
					<Route path='/main' component={Navbar}/>
					<Route path='/main/home' component={Home}/>
					<Route path='/main/profile' component={Profile}/>
					<Route path='/main/search' component={Search}/>
					<Route path='/main/post' component={Write}/>
				</div>
			</Router>
		</div>
	);
}

export default App;
			//{<Navbar />}
