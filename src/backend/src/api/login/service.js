const jwt = require('jsonwebtoken')
const firebase = require('../../lib/firebase')

const colecaoNutricionistas = firebase
    .collection('nutricionistas')

function login ({ email, password }) {
  return colecaoNutricionistas
    .get()
    .then((snapshot) => {
      let foundUsers = []
      snapshot.forEach(docs => foundUsers.push(docs.data()))

      const foundUser = foundUsers.find(userData => {
        const userEmail = userData.email
        const userPassword = userData.password

        if (email === userEmail && password === userPassword) {
          return userData
        }
      })

      if (!foundUser) {
        throw new Error('Usuário e/ou senha incorretos.')
      }


      return {
        name: foundUser.name,
        email: foundUser.email,
        token: jwt.sign({ code: foundUser.name, name: foundUser.name, email: foundUser.email }, process.env.SECRET)
      }
    })
}

module.exports = {
  login
}