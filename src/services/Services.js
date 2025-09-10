const dataSource = require('../models')

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async buscaTodosUsuarios() {
        return dataSource[this.model].findAll();
    }

    async criaRegistro(dadosDoRegistro) {
        return dataSource[this.model].create(dadosDoRegistro);
    }
    async deletaRegistro(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Services;