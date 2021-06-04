import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

// const authMiddleware = storeAPI => next => action => {
//    const state = storeAPI.getState()
//    if (state.auth.user === null){

//    }
//    return next(action)
// }

const Store = createStore(
   rootReducer,
   compose(applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default Store