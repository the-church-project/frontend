//reducers
import { combineReducers } from 'redux'
import authReducer from './auth.reducers'
import blogReducer from './blog.reducers'
import alertReducer from './alert.reducers'

const rootReducer = combineReducers({
   auth: authReducer,
   blog: blogReducer,
   alert: alertReducer,
})

export default rootReducer
