//actions
import { authConsts, blogConsts } from '../constants'
import CHAPI from '../api'
import { alertActions } from './alert'
import { ObjTokeyValueStr } from '../utils'


const handleServerError = (err, dispatch) => {
   if (err.status !== undefined) {
      delete err.status
      dispatch(alertActions.error(ObjTokeyValueStr(err)));
   }
   else {
      dispatch(alertActions.error("Server error try again in some time"))
   }
}

export const getBlog = () => {
   return async dispatch => {
      dispatch(request());
      await CHAPI.getBlog()
         .then(response => {
            dispatch(succses(response));
         }).catch(err => {
            dispatch(failure(err))
            handleServerError(err, dispatch)
         });
   }

   function request() { return { type: blogConsts.BLOG_REQUEST, } }
   function succses(response) {
      return {
         type: blogConsts.BLOG_SUCCESS,
         blog: response,
      }
   }
   function failure(error) { return { type: blogConsts.BLOG_ERROR, error } }
}

export function registerUser(userDetails, history) {
   return async dispatch => {
      dispatch(request());
      await CHAPI.createUser(userDetails)
         .then(response => {
            dispatch(succses(response));
            console.log(history)
            history.go('/')
         }).catch(err => {
            dispatch(failure(err))
            handleServerError(err, dispatch)
         });
   }

   function request() { return { type: authConsts.REGISTER_REQUEST, } }
   function succses(response) {
      return {
         type: authConsts.REGISTER_SUCCESS,
         authObj: response,
      }
   }
   function failure(error) { return { type: authConsts.REGISTER_ERROR, error } }
}

export function loginUser(cred, history) {
   return async dispatch => {
      dispatch(request());
      await CHAPI.login(cred)
         .then(response => {
            dispatch(succses(response));
            history.go('/')
         }).catch(err => {
            dispatch(failure(err))
            handleServerError(err, dispatch)
         });
   }

   function request() { return { type: authConsts.LOGIN_REQUEST, } }
   function succses(response) {
      return {
         type: authConsts.LOGIN_SUCCESS,
         authObj: response,

      }
   }
   function failure(error) { return { type: authConsts.LOGIN_ERROR, error } }
}

export function logout(history) {
   return dispatch => {
      CHAPI.logout()
      dispatch({
         type: authConsts.LOGOUT,
      })
      history.push("/cover")
      window.location.reload();
   }
}
