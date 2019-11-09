//Configuração Base da Aplicação:
//====================================================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*Definição da porta onde será executada a nossa aplicação*/
var port = process.env.PORT || 8000;

//Iniciando o Servidor (Aplicação):
app.listen(port);
console.log('Iniciando a aplicação na porta ' + port);

module.exports = app;