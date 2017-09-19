import axios from 'axios'

export const AUTH_TOKEN = 'auth_token'

axios.defaults.baseURL = 'http://localhost:8888/api/v1/'
axios.defaults.validateStatus = function(status) {
  return status >= 200 && status < 300
}

setAxiosToken()

export function setAxiosToken(token) {
  if (token) {
    sessionStorage.setItem(AUTH_TOKEN, token)
  } else {
    token = sessionStorage.getItem(AUTH_TOKEN)
  }
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token
  }
}

export function clearAxiosToken() {
  sessionStorage.removeItem(AUTH_TOKEN)
  axios.defaults.headers.common['Authorization'] = ''
}

export function obtainAuthToken(credentials) {
  return axios.post('obtain-auth-token/', credentials)
}

export function deleteTrip(id) {
  axios.delete('custom/trip/' + id)
}

export function getScoreboard() {
  return axios.get('custom/scoreboard/')
}

export function getDashboard() {
  return axios.get('custom/dashboard/')
}

export function isAuthenticated() {
  return sessionStorage.getItem(AUTH_TOKEN)
}

export function getUserDetails(id) {
  return axios.get(`custom/user/${id}`)
}

export function getTeamDetails(id) {
  return axios.get(`custom/team/${id}`)
}

export function getInvitations() {
  return axios.get(`custom/invitations/`)
}
