import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
   // const [protectedRedirectFrom, setprotectedRedirectFrom] = useState('')
   return (
      <Route {...rest} >
         {(rest.user) ? <Component {...rest} /> :
            <Redirect to={{
               pathname: rest.redirect,
               state: { from: rest.location }
            }} />}
         {/* {console.log(rest)} */}
      </Route>
   )
}
function mapStateToProps(state) {
   return { user: state.auth.token }
}
export default connect(mapStateToProps,)(ProtectedRoute)
