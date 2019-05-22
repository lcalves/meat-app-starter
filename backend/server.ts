import { handleAuthentication } from './auth';
import * as jsonServer from 'json-server'

import {handleAuthorization} from './authz'

import * as fs from 'fs'
import * as https from 'https'

const bodyParser = require("body-parser");
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
	extended: true
}));

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)


//rota de login "middleware para login"
server.post('/login', handleAuthentication)

server.use('/orders', handleAuthorization)

// Use default router
server.use(router)

const options ={
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem'),
}

let porta = 3002

//
// startando o servidor para ficar observando as alteracoes 
//
/*
Instale: npm i -g ts-node

Execute assim: nodemon --watch backend --exec "ts-node" backend/server.ts 
*/

https.createServer(options, server).listen(porta, () => {
  console.log('JSON Server is running https://localhost:'+porta )
})