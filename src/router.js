// import LandingPage from './pages/landing-page';
// import Login from './pages/login'
// import Register from './pages/register'
// import Otp from './pages/otp';
// import Profile from './pages/profile';
// import Family from './pages/family';
// import Event from './pages/event';
// import Blog from './pages/blog';
// import Home from './pages/home';

import { HomePage } from './pages'


var routes = [
    {
        'path': '/',
        'component': HomePage
    },
    {
        'path': '/login',
        'component': 'Login'
    },
    {
        'path': '/register',
        'component': 'Register'
    },
    {
        'path': '/profile',
        'component': 'Profile'
    },
    {
        'path': '/otp',
        'component': 'Otp'
    },
    {
        'path': '/family',
        'component': 'Family'
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