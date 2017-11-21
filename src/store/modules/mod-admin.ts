export interface State {
  info: string
}

let state: State = {
  info: 'Hi admin'
}

const mutations = {
  SET_INFO: (state: State, data: string) => state.info = data
}

const getters = {
  info: (state: State) => state.info
}

const actions = {
  updateInfo (context: { commit: Function, state: State }, params: string) {
    context.commit('SET_INFO', params)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
