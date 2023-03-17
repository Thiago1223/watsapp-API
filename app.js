/***********************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
 * Autor: Thiago
 * Data: 17/03/2023
 * Versão: 1.0
 ***********************************************************************/

const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const contatos = require('./modulo/contatos.js')

const app = express()

app.use((request, response, next) => {
    
    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()

})