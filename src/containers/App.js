import React from 'react';
import history from '../history';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Welcome from './Welcome';
import Navbar from '../components/Navbar/Navbar';
import Modal from '../components/Modal/Modal';

const App = ({ isLoggedIn }) => {

	const renderModal = () => {
		return isLoggedIn ? null : <Modal action={() => history.push('/')}/>
	}

	return (
		<div>
			<Router history={history}>
				<div className='lg:flex bg-cus-1'>
						<Route path='/' exact component={Welcome}/>		
						<Route path='/register' exact component={Welcome}/>
						<Route path='/main' component={renderModal} />
						<Route path='/main' component={Navbar}/>
						<Route path='/main/home' component={Home}/>
						<Route path='/main/profile/:id' component={Profile}/>
						<Route path='/main/search' component={Search}/>
				</div>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => ({
	isLoggedIn: state.currentUserReducer.isLoggedIn
})

export default connect(mapStateToProps)(App);
