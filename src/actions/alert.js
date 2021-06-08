import { alertConsts } from "../constants";

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