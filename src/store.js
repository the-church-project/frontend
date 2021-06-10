import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

// const authMiddleware = storeAPI => next => action => {
//    const state = storeAPI.getState()
//    if (state.auth.user === null){

//    }
//    return next(action)
// }

const Store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunkMiddleware),)
)

export default Store