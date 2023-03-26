/***********************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
 * Autor: Thiago
 * Data: 17/03/2023
 * Versão: 1.0
 ***********************************************************************/

const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const jsonContatos = require('./modulo/index.js')

const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()

})

app.get('/v1/whatsapp/perfil/id/:id', cors(), async function (request, response, next) {

    let statusCode
    let dadosPerfis = {}
    let idPerfil = request.params.id

    if (idPerfil == '' || idPerfil == undefined || idPerfil.length != 1 || isNaN(idPerfil) || idPerfil < 1 || idPerfil > 4) {
        statusCode = 400
        dadosPerfis.message = 'Não foi possível processar pois os dados de entrada que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio.'
    } else {
        
        let contatos = jsonContatos.getPerfilId(idPerfil)

        if (contatos) {
            statusCode = 200
            dadosPerfis = contatos
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosPerfis)

})

app.get('/v1/whatsapp/perfil/telefone/:phone', cors(), async function (request, response, next) {

    let statusCode
    let dadosPerfis = {}
    let telefonePerfil = request.params.phone

    if (telefonePerfil == '' || telefonePerfil == undefined || telefonePerfil.length < 10 || telefonePerfil.length > 11 || isNaN(telefonePerfil)) {
        statusCode = 400
        dadosPerfis.message = 'Não foi possível processar pois os dados de entrada que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio.'
    } else {
        
        let contatos = jsonContatos.getPerfilTelefone(telefonePerfil)

        if (contatos) {
            statusCode = 200
            dadosPerfis = contatos
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosPerfis)

})

app.get('/v1/whatsapp/perfil/imagem/telefone/:phone', cors(), async function (request, response, next) {

    let statusCode
    let dadosPerfis = {}
    let telefonePerfil = request.params.phone

    if (telefonePerfil == '' || telefonePerfil == undefined || telefonePerfil.length < 10 || telefonePerfil.length > 11 || isNaN(telefonePerfil)) {
        statusCode = 400
        dadosPerfis.message = 'Não foi possível processar pois os dados de entrada que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio.'
    } else {
        
        let contatos = jsonContatos.getImagePerfil(telefonePerfil)

        if (contatos) {
            statusCode = 200
            dadosPerfis = contatos
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosPerfis)

})

app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.')
})