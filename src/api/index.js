//apis
import axios from 'axios';
import Store from '../store'

const hostname = 'http://localhost:8000';
const baseUrl = `${hostname}/api/`;
// const testUrl = 'https://jsonplaceholder.typicode.com/'

class _CHAPI {
   dispatchRequest(path, data, method = "GET") {
      let s = Store.getState();
      let headers = {
         'Content-Type': 'application/json',
         // 'Access-Control-Allow-Origin': '*',
      }
      if (s.auth.token != null) {
         headers.Authorization = `Token ${s.auth['token']}`
      }
      const instance = axios.create({
         baseURL: baseUrl,
         timeout: 10000,
         headers: headers
      });
      return instance({
         method: method,
         url: path,
         data: data
      }).then(response => (
         {
            data: response.data,
            error: null,
         }
      )).catch(err => {
         if (err.response.status === 404) {
            throw new Error(`${err.config.url} not found`);
         }
         else if (err.response.status === 400) {
            return {
               data: null,
               error: err.response.data,
            }
         }
         throw err;
      });
         // {
         //    data: null,
         //    error: error,
         // }
   }

   // testAPI() {
   //    return this.dispatchRequest('/posts')
   // }

   //User APIs
   login(credentials) {
      return this.dispatchRequest('/api-token-auth/', credentials, "POST")
   }

   editUser(params) {
      return this.dispatchRequest(`/core/user/${params.id}`, { ...params }, "UPDATE")
   }

   createUser(params) {
      return this.dispatchRequest('/user/', { ...params }, 'POST')
   }

   //Family APIs
   async getUserFamily() {
      let resp = await this.dispatchRequest('/core/family')
      return resp
   }

   async creatUserFamily(params) {
      let resp = await this.dispatchRequest('/core/family/', { ...params }, 'POST')
      return resp
   }

   async editUserFamily(params) {
      let resp = await this.dispatchRequest(`/core/family/${params.id}`, { ...params }, 'UPDATE')
      return resp
   }

   //Blog APIs
   async getBlog() {
      let resp = await this.dispatchRequest('/reading/blog')
      return resp
   }

   async getEvent() {
      let resp = await this.dispatchRequest('/event/')
      return resp
   }
}

const CHAPI = new _CHAPI();
export default CHAPI
