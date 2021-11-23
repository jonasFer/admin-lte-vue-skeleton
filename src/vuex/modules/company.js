import {COMPANY} from '../mutation-types'

const state = {
  main: {
    name: 'Empresa Teste',
    initials: null,
    type: 0,
    document: null,
    responsible: null,
    contact: [{}],
    address: {},
    logo: {},
    parameters: {}
  }
}

const mutations = {
  [COMPANY] (state, data) {
    state.main = data
  }
}

export default {
  state,
  mutations
}
