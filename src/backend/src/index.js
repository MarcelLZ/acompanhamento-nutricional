const cors = require('cors')
const express = require('express');
const app = express();

// Dizendo para a aplicação entender JSON.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors('*'))

app.get('/pacientes', function (req, res) {
  res.json([
    { id: 1, name: "Fulano", dataCadastro: '2020-02-20' },
    { id: 2, name: "Fulano 2", dataCadastro: '2020-02-20' },
    { id: 3, name: "Fulano 3", dataCadastro: '2020-02-20' },
    { id: 4, name: "Fulano 4", dataCadastro: '2020-02-20' },
    { id: 5, name: "Fulano 5", dataCadastro: '2020-02-20' },
    { id: 6, name: "Fulano 6", dataCadastro: '2020-02-20' },
    { id: 7, name: "Fulano 6", dataCadastro: '2020-02-20' },
    { id: 8, name: "Fulano 6", dataCadastro: '2020-02-20' },
    { id: 9, name: "Fulano 6", dataCadastro: '2020-02-20' },
    { id: 10, name: "Fulano 6", dataCadastro: '2020-02-20' },
  ]);
});

app.post('/nutricionistas', function (req, res) {
  console.log(req.body)
  res.json(req.body)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
