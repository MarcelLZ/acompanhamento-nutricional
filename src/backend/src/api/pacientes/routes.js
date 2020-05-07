const service = require('./service')

const { Router } = require('express')
const router = Router()

router.get('/', function (req, res) {
  res.json({ msg: 'API/pacientes' })
})

router.post('/', function (req, res) {
  service.salvarPaciente(req.body)
  res.sendStatus(204)
})

module.exports = router
