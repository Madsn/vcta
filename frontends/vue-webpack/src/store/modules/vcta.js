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
  },
  deleteTrip({commit}, id) {
    commit(types.DELETE_TRIP, id)
  }
}

// mutations
var maxId = 3
const mutations = {
  [types.ADD_TRIP](state, payload) {
    const newTrip = {id: maxId++, ...payload}
    state.trips.push(newTrip)
  },
  [types.DELETE_TRIP](state, id) {
    const index = state.trips.findIndex(function(elem) {
      return elem.id === id
    })
    if (index > -1) {
      state.trips.splice(index, 1)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
