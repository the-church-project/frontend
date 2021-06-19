import {
   ProfilePage,
   FamilyPage,
   HomePage,
   UserDetailsPage,
   FOF,
} from '../pages'
import BlogDetailed  from '../pages/blogdetail'

var homeRoutes = [
   {
      path: '/userdetails',
      component: UserDetailsPage,
      protected: true,
   },
   {
      path: '/myprofile',
      component: ProfilePage,
      protected: true,
   },
   {
      path: '/myfamily',
      component: FamilyPage,
      protected: true,
   },
   {
      path: '/',
      component: HomePage,
      protected: true,
   },
   {
      path: '/blog/:slug',
      component: BlogDetailed,
      protected: true,
   },
   {
      path: '*',
      component: FOF,
   }

]

export default homeRoutes
