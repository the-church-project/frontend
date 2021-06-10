//reducers
import { combineReducers } from 'redux'
import { authConsts, alertConsts, blogConsts } from '../constants'
import { localAuthObject } from '../utils';


const inituserState = {
   token: localAuthObject ? localAuthObject.token : null,
   user: localAuthObject ? localAuthObject.user : null,
}

function authReducer(state = inituserState, action) {
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

const initAppstate = {
   isLoading: false,
   entities: { results: null },
}

function blogReducer(state = initAppstate, action) {
   switch (action.type) {
      case blogConsts.BLOG_REQUEST:
         return Object.assign({}, state, { isLoading: true })
      case blogConsts.BLOG_SUCCESS:
         return Object.assign({}, state, {
            isLoading: false,
            entities: action.blog
         })
      case blogConsts.BLOG_ERROR:
         return Object.assign({}, state, {
            isLoading: false,
            error: action.error
         })
      default:
         return state
   }
}

// function registerReducer(state = {}, action) {
//    switch (action.type) {

//    }
// }

function alertReducer(state = {}, action) {
   switch (action.type) {
      case alertConsts.SUCCESS:
         return {
            type: 'alert-success',
            message: action.message
         };
      case alertConsts.ERROR:
         return {
            type: 'alert-danger',
            message: action.message
         };
      case alertConsts.CLEAR:
         return {};
      default:
         return state
   }
}

const rootReducer = combineReducers({
   auth: authReducer,
   blog: blogReducer,
   alert: alertReducer,
   // register: registerReducer
})

export default rootReducer
