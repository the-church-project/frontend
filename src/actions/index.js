//actions
import { authConsts, blogConsts } from '../constants'
import CHAPI from '../api'
import { alertActions } from './alert'
import { ObjTokeyValueStr } from '../utils'

export const getBlog = () => {
   return async dispatch => {
      dispatch(request());
      await CHAPI.getBlog()
         .then(response => {
            dispatch(succses(response));
         }).catch(err => {
            dispatch(failure(err))
            dispatch(alertActions.error(ObjTokeyValueStr(err)));
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

export function registerUser(userDetails) {
   return async dispatch => {
      dispatch(request());
      await CHAPI.createUser(userDetails)
         .then(response => {
            dispatch(succses(response));
         }).catch(err => {
            dispatch(failure(err))
            dispatch(alertActions.error(ObjTokeyValueStr(err)));
         });
   }

   function request() { return { type: authConsts.REGISTER_REQUEST, } }
   function succses(response) {
      return {
         type: authConsts.REGISTER_SUCCESS,
         blog: response,
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
            console.log(err)
            dispatch(alertActions.error(ObjTokeyValueStr(err)));
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
      dispatch({
         type: authConsts.LOGOUT,
      })
      history.push("/cover")
   }
}
