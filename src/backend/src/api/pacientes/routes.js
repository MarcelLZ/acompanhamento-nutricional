const { Router } = require('express')
const router = Router()

router.get('/', function (req, res) {
  res.json({ msg: 'API/pacientes' })
})

router.post('/', function (req, res) {
  res.json(req.body)
})

module.exports = router
