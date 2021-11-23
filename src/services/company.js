import service from '../utils/request'

export default {
  me () {
    return service({
      url: 'company',
      method: 'get'
    })
  },
  edit (id, request) {
    return service({
      url: `company/${id}`,
      method: 'put',
      data: request
    })
  }
}
