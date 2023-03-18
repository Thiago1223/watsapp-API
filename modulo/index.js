const jsonContatos = require('./contatos.js')

const getPerfilId = (id) => {

    let jsonPerfil = {}
    let status = false

    jsonContatos.contatos["whats-users"].forEach(contatosDados => {
        if (contatosDados.id == id) {
            jsonPerfil.contacts = contatosDados.contacts
            status = true
        }
    })

    if (status == true) {
        return jsonPerfil
    } else {
        return status
    }
    
}

const getPerfilTelefone = (telefone) => {

    let jsonPerfil = {}
    let status = false

    jsonContatos.contatos["whats-users"].forEach(contatosDados => {
        if (contatosDados.number == telefone) {
            jsonPerfil.contacts = contatosDados.contacts
            status = true
        }
    })

    if (status == true) {
        return console.log(jsonPerfil)
    } else {
        return status
    }
    
}

module.exports = {
    getPerfilId,
    getPerfilTelefone
}