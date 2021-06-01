import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';
import routes from './router';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {routes.map((item,key) => 
            <Route exact path={item.path}>
              {item.component}
            </Route>
          )}

          </Switch>
      </Router>
    </div>
  );
}

export default App;