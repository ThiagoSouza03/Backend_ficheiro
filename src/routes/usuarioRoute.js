const {Router} = require("express");
const UsuarioController = require('../controllers/UsuarioController.js');

const router = Router();

router.get('/usuarios', UsuarioController.pegaTodos);

module.exports = router;