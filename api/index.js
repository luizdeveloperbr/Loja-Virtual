const express = require("express");
const cookieParse = require("cookie-parser")
const app = express();
// configuração de conexão com o banco de dados
const sequelize = require('./database/conection.js')
// definição de rotas
const rotas = require("./rotas");

// execução da conexão com o banco de dados
try {
  sequelize.authenticate();
  sequelize.sync()
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(express.urlencoded({extended: true}))
app.use(cookieParse())
app.use(express.json())
//rota principal da API
app.use("/", rotas);

app.listen(5000, () => {
  console.log("servidor rodando...");
});