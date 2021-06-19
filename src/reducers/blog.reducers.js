//reducers
import { blogConsts } from '../constants'

const initAppstate = {
   isLoading: false,
   entities: { results: null },
   selected: null
}

export default function blogReducer(state = initAppstate, action) {
   switch (action.type) {
      case blogConsts.BLOG_REQUEST:
         return Object.assign({}, state, { isLoading: true })
      case blogConsts.BLOG_SUCCESS:
         return Object.assign({}, state, {
            isLoading: false,
            entities: action.payload
         })
      case blogConsts.BLOG_SINGLE:
         return Object.assign({}, state, {
            isLoading: false,
            selected: action.payload.item
         })
      case blogConsts.BLOG_SINGLE_REMOVE:
         return Object.assign({}, state, {
            isLoading: false,
            selected: null
         })
      case blogConsts.BLOG_ERROR:
         return Object.assign({}, state, {
            isLoading: false,
            error: action.error
         })
      default:
         return state
   }
}
