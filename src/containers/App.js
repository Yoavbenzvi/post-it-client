import React from 'react';
import history from '../history';
import { Router, Route, Switch } from 'react-router-dom';
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
				<div>
					<Route path='/main' component={Navbar}/>
				</div>
			</Router>
		</div>
	);
}

export default App;
			//{<Navbar />}
