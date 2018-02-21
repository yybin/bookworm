import React from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import DashboardPage from './components/pages/DashboardPage'
import SignupPage from './components/pages/SignupPage'
import UserRoute from './components/routes/UserRoute'
import GuestRoute from './components/routes/GuestRoute'

const App = ({ location }) => (
    <div className="ui container">
		<Route  	exact location={location} path="/"           component={HomePage}/>
		<GuestRoute exact location={location} path="/login"      component={LoginPage}/>
		<GuestRoute exact location={location} path="/signup"      component={SignupPage}/>
		<UserRoute  exact location={location} path="/dashboard"  component={DashboardPage}/>
	</div>
)

App.propTypes = {
    location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired
}

export default App;