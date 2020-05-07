const admin = require('firebase-admin')
const firebase = require('../../lib/firebase')

const colecaoNutricionistas = firebase
    .collection('nutricionistas')

function salvarPaciente (dados) {
  const { nutriCode, name } = dados

  colecaoNutricionistas
    .doc(nutriCode)
    .update({ pacientes: admin.firestore.FieldValue.arrayUnion({ name }) })
}

module.exports = {
  salvarPaciente
}