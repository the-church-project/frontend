//reducers
import { authConsts } from '../constants'
import { localAuthObject } from '../utils';


const inituserState = {
   token: localAuthObject ? localAuthObject.token : null,
   user: localAuthObject ? localAuthObject.user : null,
}

export default function authReducer(state = inituserState, action) {
   switch (action.type) {
      case authConsts.LOGIN_REQUEST:
         localStorage.removeItem("auth")
         return Object.assign({}, state, {
            'isLoading': true
         })
      case authConsts.LOGIN_SUCCESS:
         localStorage.setItem("auth", JSON.stringify(action.authObj))
         return Object.assign({}, state, {
            'user': action.authObj.user,
            'token': action.authObj.token,
            'isLoading': false
         })
      case authConsts.LOGIN_ERROR:
         return Object.assign({}, state, {
            'isLoading': false,
            'error': action.error
         })
      case authConsts.LOGOUT:
         // localStorage.removeItem("auth")
         return Object.assign({}, state, { 'user': null, 'token': null })

      // register cases
      case authConsts.REGISTER_REQUEST:
         return Object.assign({}, state, { isLoading: true })
      case authConsts.REGISTER_SUCCESS:
         localStorage.setItem("auth", JSON.stringify(action.authObj))
         return Object.assign({}, state, {
            'user': action.authObj.user,
            'token': action.authObj.token,
            'isLoading': false
         })
      case authConsts.REGISTER_ERROR:
         return Object.assign({}, state, {
            isLoading: false,
            error: action.error
         })
      default:
         return state
   }
}
