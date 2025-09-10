const { Router } = require("express");
const UsuarioController = require('../controllers/UsuarioController.js');

const usuarioController = new UsuarioController()

const router = Router();

router.get('/usuarios', (req, res) => usuarioController.buscaTodosUsuarios(req, res));
router.post('/usuarios', (req, res) => usuarioController.criaRegistro(req, res));
router.delete('/usuarios/:id', (req, res) => usuarioController.deletaRegistro(req, res));

module.exports = router;