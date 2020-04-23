import axios from 'axios'

export function saveNutri (data) {
  return axios.post('http://localhost:3000/nutricionistas', data)
}