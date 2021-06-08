import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './router';
import { ProtectedRoute } from './components'
import { alertActions } from './actions/alert'
class App extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			this.props.clearAlerts();
		}
	}

	componentDidMount() {
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
		const { alert } = this.props;
		return (
			<div className="App">
				{alert.message &&
					<div className={`alert ${alert.type}`}>{alert.message}</div>
				}
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
const mapStateToProps = (state) => ({
	alert: state.alert
})

const mapDispatchToProps = (dispatch) => ({
	clearAlerts: () => dispatch(alertActions.clear)
})


export default connect(mapStateToProps, mapDispatchToProps)(App)