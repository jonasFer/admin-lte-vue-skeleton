import axios from 'axios'

export default {
  login (request) {
    return axios.post('http://localhost:8000/auth', request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}
