import React from 'react';
import history from '../history';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Welcome from './Welcome';
import Navbar from '../components/Navbar/Navbar';
import Spinner from '../components/Spinner/Spinner';
import Modal from '../components/Modal/Modal';

const App = ({ modal, isLoggedIn }) => {
	return (
		<div>
			<Router history={history}>
				<div className='lg:flex bg-cus-1'>
						<Route path='/spinner' exact component={Spinner} />
						<Route path='/' exact component={Welcome}/>		
						<Route path='/register' exact component={Welcome}/>
						{modal? <Route path='/main' render={(modal) => <Modal header={modal.header} body={modal.body} button={modal.button}/>} dismiss={modal.dismiss} action={modal.action} /> : null}
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
	modal: state.modalReducer.modal,
	isLoggedIn: state.currentUserReducer.isLoggedIn
})

export default connect(mapStateToProps)(App);
