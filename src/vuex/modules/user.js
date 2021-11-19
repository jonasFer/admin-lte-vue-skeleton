import {USER, TOKEN} from '../mutation-types'

const state = {
  main: {
    name: 'Alexander Pierce',
    position: 'Web Developer',
    token: null,
    roles: ['ROLE_ADMIN'],
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
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
