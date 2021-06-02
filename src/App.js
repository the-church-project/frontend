import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import routes from './router';
import {
	TransitionGroup,
	CSSTransition
} from "react-transition-group";

const AnimatedApp = () => {
	const location = useLocation();
	return (
		<TransitionGroup>
			<CSSTransition
				key={location.key}
				classNames="fade"
				timeout={750}
			>
				<Switch>
					{routes.map((item, key) =>
						<Route exact key={key} path={item.path} component={item.component} />
					)}
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	);

}

function NewApp() {
	return (
	  <div className="App">
		 <Router>
			{/* <Appbar /> */}
			<AnimatedApp />
		 </Router>
	  </div>
	);
 }
 

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					{routes.map((item, key) =>
						<Route exact key={key} path={item.path} component={item.component} />
					)}
				</Switch>
			</Router>

		</div>
	);
}

export default App;