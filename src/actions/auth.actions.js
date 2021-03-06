// Auth actions defined here
import { authConsts, userConsts } from '../constants'
import CHAPI from '../api'
import { handleServerError } from './alert.actions'

export function registerUser(payload) {
   return async dispatch => {
      dispatch(request());
      await CHAPI.createUser(payload.data)
         .then(response => {
            dispatch(succses(response));
            payload.history.go('/')
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

export function registerFamily(payload) {
   return async dispatch => {
      dispatch(request());
      await CHAPI.creatUserFamily(payload.data)
         .then(response => {
            dispatch(succses(response));
            payload.history.go('/')
         }).catch(err => {
            dispatch(failure(err))
            handleServerError(err, dispatch)
         });
   }

   function request() { return { type: userConsts.FAM_REGISTER_REQUEST, } }
   function succses(response) {
      return {
         type: userConsts.FAM_REGISTER_SUCCESS,
         authObj: response,
      }
   }
   function failure(error) { return { type: userConsts.FAM_REGISTER_ERROR, error } }
}

export function loginUser(payload) {
   return async dispatch => {
      dispatch(request());
      await CHAPI.login(payload.data)
         .then(response => {
            dispatch(succses(response));
            payload.history.go('/family-register')
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

export function logout(payload) {
   return dispatch => {
      CHAPI.logout()
      dispatch({
         type: authConsts.LOGOUT,
      })
      payload.history.push("/cover")
      window.location.reload();
   }
}
