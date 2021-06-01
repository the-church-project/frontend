import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './router';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					{routes.map((item, key) =>
						<Route exact path={item.path} component={item.component} />
					)}
				</Switch>
			</Router>
		</div>
	);
}

export default App;