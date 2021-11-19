import * as types from './mutation-types'
import { services } from '../services'
import { setToken } from '../utils/auth'

export const login = ({ commit }, userInfo) => {
  return services.user.login(userInfo)
    .then((response) => {
      commit(types.TOKEN, response.data.token)
      setToken(response.data.token)
    })
    .catch((error) => {
      console.error(error)
    })
}
