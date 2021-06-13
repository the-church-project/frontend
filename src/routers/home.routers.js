import {
   ProfilePage,
   FamilyPage,
   HomePage,
} from '../pages'

var homeRoutes = [
   {
      path: '/profile',
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
   
]

export default homeRoutes
