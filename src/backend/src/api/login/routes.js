const service = require('./service')

const { Router } = require('express')
const router = Router()

router.post('/login', function (req, res) {
  service
    .login(req.body)
    .then(foundUser => res.json(foundUser))
    .catch(error => res.status(403).json({ error: error.message }))
})

module.exports = router
