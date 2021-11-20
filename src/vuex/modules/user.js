import {USER, TOKEN} from '../mutation-types'

const state = {
  main: {
    id: null,
    roles: null,
    token: null,
    email: null,
    avatar: null,
    name: null
  }
}

const mutations = {
  [USER] (state, data) {
    state.main = data
  },
  [TOKEN] (state, data) {
    state.main.token = data
  }
}

export default {
  state,
  mutations
}
