import * as api from '../api'
import * as types from '../mutation-types'

// initial state
const state = {
  dashboard: {
    loading: true,
    trips: [
    ],
    userInfo: {
    }
  },
  scoreboard: {
    loading: true,
    individuals: [
    ],
    teams: [
    ]
  },
  userpage: {
    loading: true
  }
}

// getters
const getters = {
  dashboard: state => state.dashboard,
  scoreboard: state => state.scoreboard,
  userpage: state => state.userpage
}

// actions
const actions = {
  addTrip({commit}, trip) {
    commit(types.ADD_TRIP, trip)
  },
  deleteTrip({commit}, id) {
    commit(types.DELETE_TRIP, id)
    api.deleteTrip(id)
  },
  getScoreboard({commit}) {
    commit(types.LOADING_SCOREBOARD)
    api.getScoreboard().then((response) => {
      commit(types.SUCCESS_LOAD_SCOREBOARD, response.data)
    })
  },
  getDashboard({commit}) {
    if (api.isAuthenticated()) {
      api.getDashboard().then((response) => {
        commit(types.SUCCESS_LOAD_DASHBOARD, response.data)
      })
    } else {
      console.error('Must be logged in first')
    }
  },
  getUserDetails({commit}, id) {
    commit(types.LOADING_USER)
    api.getUserDetails(id).then((response) => {
      commit(types.SUCCESS_LOAD_USER, response.data)
    })
  }
}

// mutations
let maxId = 3
function getDistinctDays(trips) {
  let days = new Set()
  for (let i = 0; i < trips.length; i++) {
    days.add(trips[i].date)
  }
  return days.size
}
const mutations = {
  [types.LOADING_SCOREBOARD](state) {
    state.scoreboard.loading = true
  },
  [types.SUCCESS_LOAD_SCOREBOARD](state, payload) {
    state.scoreboard = {loading: false, ...payload}
  },
  [types.SUCCESS_LOAD_DASHBOARD](state, payload) {
    state.dashboard = {loading: false, trips: payload.trips, userInfo: payload.userInfo[0]}
  },
  [types.ADD_TRIP](state, payload) {
    const newTrip = {id: maxId++, ...payload}
    state.dashboard.trips.push(newTrip)
    // Update userInfo
    state.dashboard.userInfo.tripCount += 1
    state.dashboard.userInfo.distance += newTrip.distance
    let distinctDays = getDistinctDays(state.dashboard.trips)
    state.dashboard.userInfo.days = distinctDays
  },
  [types.DELETE_TRIP](state, id) {
    let distanceDiff = 0
    const index = state.dashboard.trips.findIndex(function(elem) {
      distanceDiff = elem.distance
      return elem.id === id
    })
    if (index > -1) {
      state.dashboard.userInfo.tripCount -= 1
      state.dashboard.trips.splice(index, 1)
      state.dashboard.userInfo.distance -= distanceDiff
      state.dashboard.userInfo.days = getDistinctDays(state.dashboard.trips)
    }
  },
  [types.SUCCESS_LOAD_USER](state, payload) {
    const userInfo = payload.userInfo ? payload.userInfo[0] : {}
    state.userpage = {loading: false, userInfo: userInfo, trips: payload.trips}
  },
  [types.LOADING_USER](state) {
    state.userpage = {loading: true}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
