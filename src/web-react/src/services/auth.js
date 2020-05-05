import axios from 'axios'

export function login ({ email, password }) {
  return axios.post('http://localhost:3002/auth/login', {
    email,
    password
  })
}
