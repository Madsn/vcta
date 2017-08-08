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
    id: 1,
    fullName: 'John Smith',
    name: 'John',
    distance: 10,
    tripCount: 2,
    days: 2,
    team: 1
  },
  scoreboard: {
    individuals: [
      { id: 1, name: 'John', team: 1, teamName: 'Alpha', distance: 10, days: 2 },
      { id: 2, name: 'Bill', team: 2, teamName: 'Bravo', distance: 17.5, days: 3 }
    ],
    teams: [
      { id: 1, name: 'Alpha', captain: 'John', memberCount: 1, distance: 10, avgDistance: 10, avgDays: 5 },
      { id: 2, name: 'Bravo', captain: 'Bill', memberCount: 1, distance: 17.5, avgDistance: 17.5, avgDays: 3 }
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
let maxId = 3
function getDistinctDays(trips) {
  let days = new Set()
  for (let i = 0; i < trips.length; i++) {
    days.add(trips[i].date)
  }
  return days.size
}
const mutations = {
  [types.ADD_TRIP](state, payload) {
    const newTrip = {id: maxId++, ...payload}
    state.trips.push(newTrip)
    // Update userInfo
    state.userInfo.tripCount += 1
    state.userInfo.distance += newTrip.distance
    let distinctDays = getDistinctDays(state.trips)
    state.userInfo.days = distinctDays
    // Update individuals
    let userIndex = state.scoreboard.individuals.findIndex(function(obj) {
      return obj.id === state.userInfo.id
    })
    state.scoreboard.individuals[userIndex].distance += newTrip.distance
    state.scoreboard.individuals[userIndex].days = distinctDays
    // Update team
    let teamIndex = state.scoreboard.teams.findIndex(function(obj) {
      return obj.id === state.userInfo.team
    })
    state.scoreboard.teams[teamIndex].distance += newTrip.distance
    state.scoreboard.teams[teamIndex].avgDistance =
      state.scoreboard.teams[teamIndex].distance / state.scoreboard.teams[teamIndex].memberCount
    state.scoreboard.teams[teamIndex].avgDays += 1
    // Can't calculate distinct days without the full list of trips for the team
  },
  [types.DELETE_TRIP](state, id) {
    let distanceDiff = 0
    const index = state.trips.findIndex(function(elem) {
      distanceDiff = elem.distance
      return elem.id === id
    })
    let oldTrip = state.trips[index]
    if (index > -1) {
      state.userInfo.tripCount -= 1
      state.trips.splice(index, 1)
      state.userInfo.distance -= distanceDiff
      state.userInfo.days = getDistinctDays(state.trips)
    }
    // Update individuals
    let userIndex = state.scoreboard.individuals.findIndex(function(obj) {
      return obj.id === state.userInfo.id
    })
    state.scoreboard.individuals[userIndex].distance -= oldTrip.distance
    state.scoreboard.individuals[userIndex].days = getDistinctDays(state.trips)
    // Update team
    let teamIndex = state.scoreboard.teams.findIndex(function(obj) {
      return obj.id === state.userInfo.team
    })
    state.scoreboard.teams[teamIndex].distance -= oldTrip.distance
    state.scoreboard.teams[teamIndex].avgDistance =
      state.scoreboard.teams[teamIndex].distance / state.scoreboard.teams[teamIndex].memberCount
    state.scoreboard.teams[teamIndex].avgDays -= 1
    // Can't calculate distinct days without the full list of trips for the team
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
