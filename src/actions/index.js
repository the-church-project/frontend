//actions
import { LOGIN_SUCCESS, BLOG_SUCCESS, LOGOUT } from '../typesaction'
import CHAPI from '../api'
import { browserHistory } from 'react-router'

export const getBlog = (credentials) => {
   return async dispatch => {
      const { results } = await CHAPI.getBlog()
      // console.log(blogg);
      dispatch({
         type: BLOG_SUCCESS,
         blog: results,
      })
   }
}

export function getLoggedInUser(user) {
   return async (dispatch) => {
      dispatch({
         type: LOGIN_SUCCESS,
         user: user
      })
   }
}


export function loginUser(cred, from) {
   return async dispatch => {
      var final = JSON.stringify(cred)
      // console.log(final)
      const response = await CHAPI.login(final)
      if (response.data) {
         dispatch({
            type: LOGIN_SUCCESS,
            token: response.data.token,
            user: response.data.user
         })
         from.history.push("/")
      }
      else {
         // console.log(JSON.stringify(response.error.response.data, null, 2))
         alert(JSON.stringify(response.error, null, 2))
      }
   }
}


export function logout() {
   return dispatch => {
      dispatch({
         type: LOGOUT
      })
   }
}
