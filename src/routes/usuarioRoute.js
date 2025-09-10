const { Router } = require("express");
const UsuarioController = require('../controllers/UsuarioController.js');

const usuarioController = new UsuarioController

const router = Router();

router.get('/usuarios', (req, res) => usuarioController.buscaTodosUsuarios(req, res));
router.post('/usuario', (req, res) => usuarioController.criaRegistro(req, res));

module.exports = router;