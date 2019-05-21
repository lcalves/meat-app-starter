"use strict";
exports.__esModule = true;
var auth_1 = require("./auth");
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
//rota de login "middleware para login"
server.post('/login', auth_1.handleAuthentication);
// Use default router
server.use(router);
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
var porta = 3002;
//
// startando o servidor para ficar observando as alteracoes 
//
/*
Instale: npm i -g ts-node

Execute assim: nodemon --watch backend --exec "ts-node" backend/server.ts
*/
https.createServer(options, server).listen(porta, function () {
    console.log('JSON Server is running https://localhost:' + porta);
});
