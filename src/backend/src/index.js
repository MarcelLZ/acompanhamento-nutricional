require('dotenv').config()

const express = require('express');
const cors = require('cors')
const app = express();

// Rotas disponíveis
const rotasPacientes = require('./api/pacientes/routes')
const rotasNutricionistas = require('./api/nutricionistas/routes')
const rotasLogin = require('./api/login/routes')

// Dizendo para a aplicação entender JSON.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors('*'))

// Registrando as nossas rotas
app.use('/pacientes', rotasPacientes);
app.use('/nutricionistas', rotasNutricionistas);
app.use('/auth', rotasLogin)

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});
