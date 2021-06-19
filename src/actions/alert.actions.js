import { alertConsts } from "../constants";
import { ObjTokeyValueStr } from '../utils';

export const alertActions = {
   success,
   error,
   clear
};

function success(message) {
   return { type: alertConsts.SUCCESS, message };
}

function error(message) {
   return { type: alertConsts.ERROR, message };
}

function clear() {
   return { type: alertConsts.CLEAR };
}

export const handleServerError = (err, dispatch) => {
   if (err.status !== undefined) {
      delete err.status
      dispatch(error(ObjTokeyValueStr(err)));
   }
   else {
      dispatch(error("Server error try again in some time"))
   }
}