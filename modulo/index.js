const jsonContatos = require('./contatos.js')

const getPerfil = (id) => {

    let jsonPerfil = {}
    let status = false

    jsonContatos.contatos["whats-users"].forEach(contatosDados => {
        if (contatosDados.id == id || contatosDados.number == id) {
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

module.exports = {
    getPerfil
}