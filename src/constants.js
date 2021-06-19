export const authConsts = {
   // user actions
   LOGIN_REQUEST: "auth/LOGIN_REQUEST",
   LOGIN_SUCCESS: "auth/LOGIN_SUCCESS",
   LOGOUT: "auth/LOGOUT",
   LOGIN_ERROR: "auth/LOGIN_ERROR",

   // register actions
   REGISTER_REQUEST: "auth/REGISTER_REQUEST",
   REGISTER_SUCCESS: "auth/REGISTER_SUCCESS",
   REGISTER_ERROR: "auth/REGISTER_ERROR",
}

export const blogConsts = {
   // blog actions
   BLOG_REQUEST: 'blog/BLOG_REQUEST',
   BLOG_SUCCESS: 'blog/BLOG_SUCCESS',
   BLOG_ERROR: 'blog/BLOG_ERROR',
   BLOG_SINGLE:'blog/BLOG_SINGLE',
   BLOG_SINGLE_REMOVE:'blog/BLOG_SINGLE_REMOVE'
}

export const eventConsts = {
   // event actions
   EVENT_REQUEST: 'event/EVENT_REQUEST',
   EVENT_SUCCESS: 'event/EVENT_SUCCESS',
   EVENT_ERROR: 'event/EVENT_ERROR',
}

export const alertConsts = {
   // alert actions
   SUCCESS: 'ALERT_SUCCESS',
   ERROR: 'ALERT_ERROR',
   CLEAR: 'ALERT_CLEAR'
}