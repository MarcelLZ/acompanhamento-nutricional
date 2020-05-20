import axios from 'axios'

function buscarPacientes () {
  const user = localStorage.getItem('user')
  const { token } = JSON.parse(user)

  return axios
    .get('http://localhost:3002/pacientes', { headers: { token } })
}

export { buscarPacientes }