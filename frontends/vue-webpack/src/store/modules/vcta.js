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
  },
  teampage: {
    loading: true
  },
  requests: {
    loading: true,
    list: []
  }
}

// getters
const getters = {
  dashboard: state => state.dashboard,
  scoreboard: state => state.scoreboard,
  userpage: state => state.userpage,
  teampage: state => state.teampage,
  requests: state => state.requests
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
  getDashboard(store) {
    console.log(store)
    if (api.isAuthenticated()) {
      store.commit(types.LOADING_DASHBOARD)
      api.getDashboard().then((response) => {
        store.commit(types.SUCCESS_LOAD_DASHBOARD, response.data)
      })
      store.dispatch('getTeamMembershipRequests')
    } else {
      console.error('Must be logged in first')
    }
  },
  getUserDetails({commit}, id) {
    commit(types.LOADING_USER)
    api.getUserDetails(id).then((response) => {
      commit(types.SUCCESS_LOAD_USER, response.data)
    })
  },
  getTeamDetails({commit}, id) {
    commit(types.LOADING_TEAM)
    api.getTeamDetails(id).then((response) => {
      commit(types.SUCCESS_LOAD_TEAM, response.data)
    })
  },
  getTeamMembershipRequests({commit}) {
    commit(types.LOADING_MEMBERSHIP_REQUESTS)
    api.getTeamMembershipRequests().then((response) => {
      commit(types.SUCCESS_LOAD_MEMBERSHIP_REQUESTS, response.data)
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
  [types.SUCCESS_LOAD_SCOREBOARD](state, data) {
    state.scoreboard = {loading: false, ...data}
  },
  [types.LOADING_DASHBOARD](state) {
    state.dashboard.loading = true
  },
  [types.SUCCESS_LOAD_DASHBOARD](state, data) {
    state.dashboard.loading = false
    state.dashboard.trips = data.trips
    state.dashboard.userInfo = data.userInfo[0]
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
  [types.SUCCESS_LOAD_USER](state, data) {
    const userInfo = data.userInfo ? data.userInfo[0] : {}
    state.userpage = {loading: false, userInfo: userInfo, trips: data.trips}
  },
  [types.LOADING_USER](state) {
    state.userpage = {loading: true}
  },
  [types.LOADING_TEAM](state) {
    state.teampage = {loading: true}
  },
  [types.SUCCESS_LOAD_TEAM](state, data) {
    const teamInfo = data.teamInfo ? data.teamInfo[0] : {}
    state.teampage = {loading: false, teamInfo: teamInfo, members: data.members}
  },
  [types.LOADING_MEMBERSHIP_REQUESTS](state) {
    state.requests.loading = true
  },
  [types.SUCCESS_LOAD_MEMBERSHIP_REQUESTS](state, data) {
    state.requests.loading = false
    state.requests.list = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
