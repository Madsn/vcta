import * as types from '../mutation-types'
// initial state
const state = {
  trips: [
    {
      id: 1,
      date: new Date('2015-05-01'),
      distance: 5
    },
    {
      id: 2,
      date: new Date('2015-05-03'),
      distance: 33
    }
  ],
  userInfo: {
    full_name: 'John Smith',
    total_distance: 55,
    number_trips: 12,
    cycling_days: 6,
    team: null
  }
}

// getters
const getters = {
  trips: state => state.trips,
  userInfo: state => state.userInfo
}

// actions
const actions = {
  addTrip({commit}, trip) {
    commit(types.ADD_TRIP, trip)
  }
}

// mutations
var maxId = 3
const mutations = {
  [types.ADD_TRIP](state, payload) {
    console.log('Adding trip, ')
    console.log(payload)
    const newTrip = {id: maxId++, ...payload}
    console.log(newTrip)
    state.trips.push(newTrip)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
