// import { createBrowserHistory } from 'history';
var init = null
try {
   init = JSON.parse(localStorage.getItem('auth'))
} catch (e) {
   //forget about it
}
export var localAuthObject = init ? init : { user: null, token: null }
// export const history = createBrowserHistory({ forceRefresh: true });
export const ObjTokeyValueStr = (input) => {
   var newstr = ''
   for (let [key, value] of Object.entries(input)) {
      newstr = newstr.concat(key, ": ", value, "   ")
   }
   return newstr
}