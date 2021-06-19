//apis
import axios from 'axios';
import { localAuthObject } from '../utils';

// const hostname = 'http://localhost:8000';
const hostname = 'http://192.168.1.9:8000';
const baseUrl = `${hostname}/api/`;
class _CHAPI {
   async dispatchRequest(path, data, method = "GET") {
      // let localAuthObject = { token: null }
      const instance = axios.create({
         baseURL: baseUrl,
         timeout: 10000,
         headers: localAuthObject['token'] ? {
            'Authorization': `Token ${localAuthObject['token']}`,
         } : null,
         validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
         }
      });
      return await instance({
         method: method,
         url: path,
         data: data
      }).then(response => this.handleResponse(response))
   }

   handleResponse(response) {
      if (response.status < 300) {
         return response.data
      } else if (response.status === 401) {
         this.logout()
         response.data['message'] = "Try Logging in again"
         return Promise.reject({ ...response.data, status: response.status })
      }
      else {
         // response.data['Possible_action'] = "Try again in some time"
         return Promise.reject({ ...response.data, status: response.status })  
      }
   }

   //User APIs
   createUser(params) {
      return this.dispatchRequest('/core/user/', params, 'POST')
   }

   login(credentials) {
      return this.dispatchRequest('/api-token-auth/', credentials, "POST")
   }

   editUser(params) {
      return this.dispatchRequest(`/core/user/${params.id}`, params, "UPDATE")
   }

   logout() {
      localStorage.removeItem('auth')
   }

   //Family APIs
   getUserFamily() {
      return this.dispatchRequest('/core/family')
   }

   creatUserFamily(params) {
      return this.dispatchRequest('/core/family/', params, 'POST')
   }

   editUserFamily(params) {
      return this.dispatchRequest(`/core/family/${params.id}`, params, 'UPDATE')
   }

   //Blog APIs
   getBlog() {
      return this.dispatchRequest('/reading/blog')
   }

   getDetailedBlog(slug) {
      return this.dispatchRequest(`/reading/blog/${slug}`)
   }

   getEvent() {
      return this.dispatchRequest('/event/')
   }
}

const CHAPI = new _CHAPI();
export default CHAPI

