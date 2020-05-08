const admin = require('firebase-admin')
const { format } = require('date-fns')
const jwt = require('jsonwebtoken')
const firebase = require('../../lib/firebase')

const colecaoNutricionistas = firebase
    .collection('nutricionistas')

function salvarPaciente (dados) {
  const { nutriCode, name } = dados

  colecaoNutricionistas
    .doc(nutriCode)
    .update({ pacientes: admin.firestore.FieldValue.arrayUnion({ name, createdAt: format(Date.now(), 'dd/MM/yyyy hh:mm:ss') }) })
}

function buscarPacientes (token) {
  const { code: nutriCode } = jwt.verify(token, process.env.SECRET)

  return new Promise(function (resolve, reject) {
    colecaoNutricionistas
      .doc(nutriCode)
      .get()
      .then((doc) => {
        const foundData = doc.data()

        if (!foundData) {
          reject('Não consegui buscar os pacientes do nutricionista. Por favor tente novamente!')
          return
        }

        resolve(foundData.pacientes)
      })
  })
}

module.exports = {
  salvarPaciente,
  buscarPacientes
}