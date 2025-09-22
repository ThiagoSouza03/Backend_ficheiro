const Services = require("./Services.js");
const bcrypt = require('bcryptjs');

class FichaUsuarioService extends Services {
    constructor() {
        super('FichaUsuario')
    }
}

module.exports = FichaUsuarioService