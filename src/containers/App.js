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
					<Switch>
						<Route path='/main' component={Navbar}/>
						<Route path='/main/home' component={Home}/>
						<Route path='/main/profile/:id' component={Profile}/>
						<Route path='/main/search' component={Search}/>
						<Route path='/' component={Welcome}/>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
			//{<Navbar />}
