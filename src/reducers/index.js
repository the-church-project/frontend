//reducers
import { combineReducers } from 'redux'
import {
   LOGIN_SUCCESS,
   LOGOUT,
   BLOG_LOADING,
   BLOG_ERROR,
   BLOG_SUCCESS
} from '../typesaction'

const inituserState = {
   token: null,
   user: "test_token",
}

function auth(state = inituserState, action) {
   switch (action.type) {
      case LOGIN_SUCCESS:
         localStorage.setItem('user', JSON.stringify(action.user))
         return Object.assign({}, state, {
            'user': action.user,
            'token': action.token
         })
      case LOGOUT:
         return Object.assign({}, state, { 'user': null })
      default:
         return state
   }
}

const initAppstate = {
   isLoading: true,
   entities: [],
   errors: []
}

function blog(state = initAppstate, action) {
   switch (action.type) {
      case BLOG_LOADING:
         return Object.assign({}, state, { isLoading: true })
      case BLOG_SUCCESS:
         return Object.assign({}, state, {
            isLoading: false,
            entities: action.blog
         })
      case BLOG_ERROR:
         return Object.assign({}, state, {
            isLoading: false,
            error: action.error.message
         })
      default:
         return state
   }
}


const rootReducer = combineReducers({
   auth,
   blog
})

export default rootReducer
