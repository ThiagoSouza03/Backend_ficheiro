const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js');

const usuarioController = new UsuarioController();
const router = Router();

router.post('/usuarios', (req, res) => usuarioController.criaNovo(req, res));
router.post('/login', (req, res) => usuarioController.login(req, res));
router.get('/usuarios', (req, res) => usuarioController.pegaTodos(req, res));
router.get('/usuarios/:id', (req, res) => usuarioController.pegaUm(req, res));
router.put('/usuarios/:id', (req, res) => usuarioController.atualiza(req, res));
router.delete('/usuarios/:id', (req, res) => usuarioController.deleta(req, res));

module.exports = router;