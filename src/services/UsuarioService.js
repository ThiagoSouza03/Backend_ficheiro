const Services = require("./Services.js");
const bcrypt = require('bcryptjs');

class UsuarioService extends Services{
    constructor(){
        super('Usuario')
    }

    async criaUsuario(dados) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(dados.senha, salt);
        dados.senha = hashedPassword;
        return super.criaRegistro(dados);
    }
}

module.exports = UsuarioService