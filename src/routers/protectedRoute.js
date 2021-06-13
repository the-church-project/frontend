import { Route, Redirect } from 'react-router-dom'
import { localAuthObject } from '../utils';

const ProtectedRoute = ({ component: Component, ...props }) => {
   return (
      <Route exact={props.exact} {...props} >
         {localAuthObject.token ? <Component {...props} /> :
            <Redirect to={{
               pathname: props.redirect,
               state: { from: props.location }
            }} />}
      </Route>
   )
}

ProtectedRoute.defaultProps = {
   redirect: "/cover",
   exact: true
}

export default ProtectedRoute
