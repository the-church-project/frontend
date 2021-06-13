import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRoute'
import homeRoutes from './home.routers'
import {
    CoverPage,
    LoginPage,
    RegisterPage,
    FamRegisterPage,
    FOF,
    PageCollections,
} from '../pages'


var mainRoutes = [
    {
        path: '/cover',
        component: CoverPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/family-register',
        component: FamRegisterPage
    },
    {
        path: '',
        component: PageCollections.Scaffold,
        protected: true,
    },
    {
        path: '*',
        component: FOF,
    }
]

const CompleteRouter = (props) => {
    return (
        <Router>
            <Switch>
                {props.routesList.map((item, key) => item.protected ? <ProtectedRoute key={key} {...item} /> :
                    <Route key={key} {...item} exact={item.exact || true} />
                )}
            </Switch>
        </Router>
    )
}
CompleteRouter.defaultProps = {
    routesList: mainRoutes,
}

export {
    homeRoutes,
    mainRoutes
}

export default CompleteRouter;