// import LandingPage from './pages/landing-page';
// import Login from './pages/login'
// import Register from './pages/register'
// import Otp from './pages/otp';
// import Profile from './pages/profile';
// import Family from './pages/family';
// import Event from './pages/event';
// import Blog from './pages/blog';
// import Home from './pages/home';

import {
    CoverPage,
    LoginPage,
    RegisterPage,
    // OTPPage,
    FamRegisterPage,
    ProfilePage,
    FamilyPage,
    HomePage,
    FOF,
} from './pages'


var routes = [
    {
        path: '/cover',
        exact:true,
        component: CoverPage
    },
    {
        path: '/login',
        exact:true,
        component: LoginPage
    },
    {
        path: '/register',
        exact:true,
        component: RegisterPage
    },
    {
        path: '/family-register',
        exact:true,
        component: FamRegisterPage
    },
    {
        path: '/',
        exact:true,
        component: HomePage,
        protected: true,
        redirect: "/cover",
    },
    {
        path: '/profile',
        exact:true,
        component: ProfilePage,
        protected: true,
        redirect: "/cover",
    },
    {
        path: '/myfamily',
        exact:true,
        component: FamilyPage,
        protected: true,
        redirect: "/cover",
    },
    {
        path: '*',
        exact:true,
        component: FOF,
        protected: false,
    }
]

export default routes;