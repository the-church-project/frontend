import CoverPage from './cover'
import LoginPage from './login'
import RegisterPage from './register'
import OTPPage from './otp'
import FamRegisterPage from './familyregister'
import ProfilePage from "./profile"
import FamilyPage from "./family"
import HomePage from './home'
import * as PageCollections from './pages.collections'

export const FOF = () => {
   return (
      <div id="FOFcontainer">
         <div className="fof">
            <h1>Error 404</h1>
         </div>
      </div>
   )
}

export {
   CoverPage,
   LoginPage,
   RegisterPage,
   OTPPage,
   FamRegisterPage,
   ProfilePage,
   FamilyPage,
   HomePage,
   PageCollections,
}