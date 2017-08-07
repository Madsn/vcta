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
      distance: 5
    }
  ],
  userInfo: {
    fullName: 'John Smith',
    name: 'John',
    distance: 10,
    tripCount: 2,
    days: 2,
    team: 'Alpha'
  },
  scoreboard: {
    individuals: [
      { id: 1, name: 'John', team: 'Alpha', distance: 10, days: 2 },
      { id: 2, name: 'Bill', team: 'Bravo', distance: 17.5, days: 3 }
    ],
    teams: [
      { id: 1, name: 'Alpha', captain: 'John', memberCount: 1, totalKm: 10, avgKm: 10, avgDays: 5 },
      { id: 2, name: 'Bravo', captain: 'Bill', memberCount: 1, totalKm: 17.5, avgKm: 17.5, avgDays: 3 }
    ]
  }
}

// getters
const getters = {
  trips: state => state.trips,
  userInfo: state => state.userInfo,
  scoreboard: state => state.scoreboard
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
function getDistinctDays(trips) {
  var days = new Set()
  for (var i = 0; i < trips.length; i++) {
    days.add(trips[i].date)
  }
  return days.size
}
const mutations = {
  [types.ADD_TRIP](state, payload) {
    const newTrip = {id: maxId++, ...payload}
    state.trips.push(newTrip)
    state.userInfo.tripCount += 1
    state.userInfo.distance += newTrip.distance
    state.userInfo.days = getDistinctDays(state.trips)
  },
  [types.DELETE_TRIP](state, id) {
    var distanceDiff = 0
    const index = state.trips.findIndex(function(elem) {
      distanceDiff = elem.distance
      return elem.id === id
    })
    if (index > -1) {
      state.userInfo.tripCount -= 1
      state.trips.splice(index, 1)
      state.userInfo.distance -= distanceDiff
      state.userInfo.days = getDistinctDays(state.trips)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
