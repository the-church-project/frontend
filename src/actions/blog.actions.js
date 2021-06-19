// Blog actions defined here
import { blogConsts } from '../constants'
import CHAPI from '../api'
import { handleServerError } from './alert.actions'

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
         payload: response,
      }
   }
   function failure(error) { return { type: blogConsts.BLOG_ERROR, error } }
}

// export const getDetailedBlog = (slug) => {
//    return async dispatch => {
//       dispatch(request());
//       if (slug) {
//          await CHAPI.getDetailedBlog(slug)
//             .then(response => {
//                dispatch(succses(response))
//             })
//             .catch(err => {
//                dispatch(failure(err))
//                handleServerError(err, dispatch)
//             });
//       }
//    }

//    function request() { return { type: blogConsts.BLOG_REQUEST, } }
//    function succses(response) {
//       return {
//          type: blogConsts.BLOG_SINGLE,
//          payload: response,
//       }
//    }
//    function failure(error) { return { type: blogConsts.BLOG_ERROR, error } }
// }

export const setSingleBlog = (payload) => {
   return async dispatch => {
      dispatch({
         type: blogConsts.BLOG_SINGLE,
         payload: payload,
      })
   }
}
export const clearSelected = () => {
   return async dispatch => {
      dispatch({
         type: blogConsts.BLOG_SINGLE_REMOVE,
      })
   }
}