//apis
import axios from 'axios';
import Store from '../store'

// const hostname = 'http://localhost:8000';
const hostname = 'https://launchspace.in';
const baseURL = `${hostname}/api/v1`;
const baseUrl = 'https://jsonplaceholder.typicode.com/'

class _CHAPI {
   dispatchRequest(path, data, method = "GET") {
      let s = Store.getState();
      let headers = {
         'Content-Type': 'application/json',
      }
      if (s.auth.user != null) {
         headers.Authorization = `Token ${s.auth.user['token']}`
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
      }).then(response => response.data)
         .catch(error => { throw Error(error) })
   }

   testAPI() {
      return this.dispatchRequest('/posts')
   }

   //User APIs
   login(credentials) {
      return this.dispatchRequest('/login/', data = { ...credentials }, "POST")
   }

   editUser(params) {
      return this.dispatchRequest(`/user/${param.id}`, data = { ...params }, "UPDATE")
   }

   createUser(params) {
      return this.dispatchRequest('/user/', data = { ...params }, 'POST')
   }

   //Family APIs
   async getUserFamily() {
      let resp = await this.dispatchRequest('/family/')
      return resp
   }

   async creatUserFamily(params) {
      let resp = await this.dispatchRequest('/family/', data = { ...params }, 'POST')
      return resp
   }

   async editUserFamily(params) {
      let resp = await this.dispatchRequest(`/family/${param.id}`, data = { ...params }, 'UPDATE')
      return resp
   }

   //Blog APIs
   async getBlog() {
      let resp = await this.dispatchRequest('/blog/')
      return resp
   }

   async getEvent() {
      let resp = await this.dispatchRequest('/event/')
      return resp
   }
}

const CHAPI = new _CHAPI();
export default CHAPI
