const Controller = require('./Controller.js')
const UsuarioService = require('../services/UsuarioService.js')

const usuarioServices = new UsuarioService()

class UsuarioController extends Controller{
   constructor(){
    super(usuarioServices)
   } 
}

module.exports = UsuarioController;