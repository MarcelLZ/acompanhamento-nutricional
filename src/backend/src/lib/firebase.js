const admin = require("firebase-admin");

// Certificado
const serviceAccount = require("../../acesso_banco.json");

// Inicializando
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://acompanhamento-nutricional.firebaseio.com"
});

// Exportando uma instância do banco
module.exports = admin.firestore()