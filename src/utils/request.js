import axios from 'axios'
import {getToken} from './auth'

const service = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${getToken()}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
