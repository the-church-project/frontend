import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { CoverPage } from './pages'
import routes from './router';
import Store from './store'
import { getLoggedInUser, logout } from './actions'
import { ProtectedRoute } from './components'

class App extends React.Component {

	componentDidMount() {
		try {
			const user = JSON.parse(localStorage.getItem('user'))
			if (user != null) {
				this.props.storeUserInState(user)
			}
		} catch (error) {
			console.log(error)
		}
		// window.gapi.load('auth2', () => {
		//   window.gapi.auth2.init({
		//     client_id: '960673880424-4jbcvs2t5bbraivg990oj1dhtoq615p3.apps.googleusercontent.com',
		//     scope: 'profile email'
		//   }).then((auth2) => {
		//     this.props.getLoggedInUser().then(() => {
		//       this.setState({ gapiLoading: false })
		//     })
		//   }).catch((err) => console.log(err));
		// })
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						{routes.map((item, key) => item.protected ? <ProtectedRoute key={key} {...item} /> :
							<Route key={key} {...item} />
						)}
					</Switch>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
})

const mapDispatchToProps = dispatch => ({
	storeUserInState: (user) => dispatch(getLoggedInUser(user)),
	logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);