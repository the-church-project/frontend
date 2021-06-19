import { alertConsts } from '../constants'

export default function alertReducer(state = {}, action) {
   switch (action.type) {
      case alertConsts.SUCCESS:
         return {
            type: 'alert-success',
            message: action.message
         };
      case alertConsts.ERROR:
         return {
            type: 'alert-danger',
            message: action.message
         };
      case alertConsts.CLEAR:
         return {};
      default:
         return state
   }
}