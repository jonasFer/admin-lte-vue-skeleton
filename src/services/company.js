import service from '../utils/request'

export default {
  me () {
    return service({
      url: 'company',
      method: 'get'
    })
  },
  edit (request) {
    return service({
      url: 'company/1', // @Todo alterar para deixar como variável
      method: 'put',
      data: request
    })
  }
}
