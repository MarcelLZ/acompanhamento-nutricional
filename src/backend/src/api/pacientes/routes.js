const service = require('./service')

const { Router } = require('express')
const router = Router()

router.get('/', function (req, res) {
  const header = req.headers

  service
    .buscarPacientes(header.token)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(error => { 
      res.status(500).json({ msg: error })
    })
})

router.post('/', function (req, res) {
  service.salvarPaciente(req.body)
  res.sendStatus(204)
})

module.exports = router
