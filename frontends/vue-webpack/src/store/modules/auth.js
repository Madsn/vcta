import * as api from '../api'
import * as types from '../mutation-types'

const state = {
  isAuthenticated: sessionStorage.getItem(api.AUTH_TOKEN) !== null,
  token: sessionStorage.getItem(api.AUTH_TOKEN)
}

const getters = {
  isAuthenticated: state => state.isAuthenticated
}

const actions = {
  getAuthToken ({commit}, credentials) {
    api.setAxiosToken()
    return api.obtainAuthToken(credentials).then((response) => {
      commit(types.SET_AUTHENTICATED, {authenticated: true, token: response.data.token})
      return Promise.resolve(response)
    }, (err) => {
      commit(types.SET_AUTHENTICATED, {authenticated: false})
      return Promise.reject(err)
    })
  },
  logout ({commit}) {
    commit(types.SET_AUTHENTICATED, {authenticated: false})
  }
}

const mutations = {
  [types.SET_AUTHENTICATED] (state, payload) {
    state.isAuthenticated = payload.authenticated
    if (payload.authenticated) {
      api.setAxiosToken(payload.token)
      state.token = payload.token
      sessionStorage.setItem(api.AUTH_TOKEN, payload.token)
    } else {
      sessionStorage.removeItem(api.AUTH_TOKEN)
      state.token = null
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
