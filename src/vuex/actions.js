import * as types from './mutation-types'
import { services } from '../services'
import { getToken, setToken } from '../utils/auth'

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

export const getInfo = ({ commit }) => {
  return services.user.getInfo(getToken())
    .then((response) => {
      var token = getToken()
      commit(types.USER, response.data)
      commit(types.TOKEN, token)
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getCompanyData = ({ commit }) => {
  return services.company.me()
    .then((response) => {
      commit(types.COMPANY, response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}

export const saveCompanyData = ({ commit }, data) => {
  return services.company.edit(data)
    .then(() => {
      commit(types.COMPANY, data)
    })
    .catch((error) => {
      console.error(error)
    })
}
