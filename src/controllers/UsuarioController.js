const dataBase = require('../models')

class UsuarioController {
    static async pegaTodos(req, res) {
        try {
            const listaDeUsuarios = await dataBase.Usuario.findAll()
            return res.status(200).json(listaDeUsuarios)
        } catch (erro) {
            return res.status(500).send(erro)
        }
    }
}

module.exports = UsuarioController;