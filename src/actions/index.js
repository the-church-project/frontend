//actions
import { LOGIN_SUCCESS, BLOG_SUCCESS, LOGOUT } from '../typesaction'
import CHAPI from '../api'

export const getBlog = (credentials) => {
   return async dispatch => {
      const blogg = await CHAPI.testAPI()
      // console.log(...blogg);
      dispatch({
         type: BLOG_SUCCESS,
         blog: blogg,
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

export function logout() {
   return dispatch => {
      dispatch({
         type:LOGOUT
      })
   }
}
