import service from '../utils/request'

export default {
  all () {
    return service({
      url: 'user',
      method: 'get'
    })
  }
}
