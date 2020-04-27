import React from 'react';
import history from '../history';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Welcome from './Welcome';

import Navbar from '../components/Navbar/Navbar'

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div className='flex'>
						<Route path='/' exact component={Welcome}/>		
						<Route path='/register' exact component={Welcome}/>
						<Route path='/main' component={Navbar}/>
						<Route path='/main/home' component={Home}/>
						<Route path='/main/profile/:id' component={Profile}/>
						<Route path='/main/search' component={Search}/>
				</div>
			</Router>
		</div>
	);
}

export default App;
			//{<Navbar />}
