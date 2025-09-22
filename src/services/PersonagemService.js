const Services = require("./Services.js");
const bcrypt = require('bcryptjs');

class PersonagensService extends Services {
    constructor() {
        super('Personagens')
    }
}

module.exports = PersonagensService