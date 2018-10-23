import axios from 'axios'
import store from '../store/index'
import { Indicator } from 'mint-ui';

const server = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})

server.interceptors.request.use(config => {
  Indicator.open()
  if (store.state.token) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers['Authorization'] = store.state.token
  }
  return config
}, error => {
  Indicator.close()
  console.log(error)
  return Promise.reject(error)
})

server.interceptors.response.use(response => {
  Indicator.close()
  console.log(response)
  return response
}, error => {
  Indicator.close()
  console.log(error)
})

export default server




