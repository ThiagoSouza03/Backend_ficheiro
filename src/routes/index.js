const usuarios = require('./usuarioRoute.js')

module.exports = app => {
    app.use('/api', usuarios)
}