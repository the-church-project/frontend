import React from 'react';
import { connect } from 'react-redux';
import { alertActions } from './actions'
import CompleteRouter from './routers'

class App extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			this.props.clearAlerts();
		}
	}

	render() {
		const { alert } = this.props;
		return (
			<div className="App">
				{alert.message &&
					<div className={`alert ${alert.type}`}>{alert.message}</div>
				}
				<CompleteRouter />
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