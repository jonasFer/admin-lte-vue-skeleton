import service from '../utils/request'

export default {
  login (request) {
    return service({
      url: 'auth',
      method: 'post',
      data: request
    })
  },
  getInfo () {
    return service({
      url: 'auth/me',
      method: 'get'
    })
  }
}
