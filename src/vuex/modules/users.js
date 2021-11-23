import {USERS} from '../mutation-types'

const state = {
  main: {
  }
}

const mutations = {
  [USERS] (state, data) {
    state.main = data
  }
}

export default {
  state,
  mutations
}
