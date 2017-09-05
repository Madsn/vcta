import axios from 'axios'

export const AUTH_TOKEN = 'auth_token'

axios.defaults.baseURL = 'http://localhost:8888/api/v1/'
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status < 300
}

export function setAxiosToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token
  } else {
    token = sessionStorage.getItem(AUTH_TOKEN)
    axios.defaults.headers.common['Authorization'] = token
  }
}

setAxiosToken()

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
