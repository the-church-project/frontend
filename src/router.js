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
    HomePage,
    LoginPage,
    RegisterPage,
    OTPPage,
    FamRegisterPage,
    ProfilePage,
    FamilyPage
} from './pages'


var routes = [
    {
        'path': '/',
        'component': HomePage
    },
    {
        'path': '/login',
        'component': LoginPage
    },
    {
        'path': '/register',
        'component': RegisterPage
    },
    {
        'path': '/otp',
        'component': OTPPage
    },
    {
        'path': '/family-register',
        'component': FamRegisterPage
    },
    {
        'path': '/profile',
        'component': ProfilePage
    },
    {
        'path': '/myfamily',
        'component': FamilyPage
    },
    {
        'path': '/event',
        'component': 'Event'
    },
    {
        'path': '/home',
        'component': 'Home'
    },
    {
        'path': '/blog',
        'component': 'Blog'
    },
]

export default routes;