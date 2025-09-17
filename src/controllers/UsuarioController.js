const Controller = require('./Controller.js')
const UsuarioService = require('../services/UsuarioService.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usuarioServices = new UsuarioService()

class UsuarioController extends Controller{
   constructor(){
    super(usuarioServices)
   }

   async criaNovo(req, res) {
    const dados = req.body;
    try {
        const novoUsuario = await usuarioServices.criaUsuario(dados);
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
   }

   async login(req, res) {
    const { email, senha } = req.body;
    try {
        const usuario = await usuarioServices.buscaUmRegistro({ where: { email: email } });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        const senhaValida = await bcrypt.compare(senha, usuario.hash_senha);
        if (!senhaValida) {
            return res.status(401).json({ message: 'Senha inválida' });
        }
        const token = jwt.sign({ id: usuario.id }, 'segredo', { expiresIn: '1h' });
        res.status(200).json({
            success:true,
            message:"Usuário criado com sucesso.",
            token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
   }

   async pegaTodos(req, res) {
    try {
        const listaDeUsuarios = await usuarioServices.buscaTodosUsuarios();
        return res.status(200).json(listaDeUsuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
   }

   async pegaUm(req, res) {
        const { id } = req.params;
        try {
            const umUsuario = await usuarioServices.buscaUmRegistro({ where: { id: id } });
            return res.status(200).json(umUsuario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
   }

   async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            await usuarioServices.atualizaRegistro(dadosAtualizados, id);
            const usuarioAtualizado = await usuarioServices.buscaUmRegistro({ where: { id: id } });
            return res.status(200).json(usuarioAtualizado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
   }

   async deleta(req, res) {
        const { id } = req.params;
        try {
            await usuarioServices.deletaRegistro(id);
            return res.status(200).json({ message: `id ${id} deletado` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
   }
}

module.exports = UsuarioController;