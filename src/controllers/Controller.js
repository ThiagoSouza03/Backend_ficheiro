class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }
    async buscaTodosUsuarios(req, res) {
        try {
            const listaDeUsuarios = await this.entidadeService.buscaTodosUsuarios()
            return res.status(200).json(listaDeUsuarios)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async criaRegistro(req, res) {
        const dadosUsuario = req.body;
        try {
            const novoUsuarioCriado = await this.entidadeService.criaRegistro(dadosUsuario)
            return res.status(201).json(novoUsuarioCriado)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async atualizaRegistro(req, res) {
        const { id } = req.params;
        const dadosNovos = req.body;
        try {
            const registroAtualizado = await this.entidadeService.atualizaRegistro(dadosNovos, Number(id))
            return res.status(200).json(registroAtualizado)
        } catch (error) {
            
        }
    }

    async deletaRegistro(req, res) {
        const { id } = req.params;
        try {
            await this.entidadeService.deletaRegistro(Number(id));
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.status(404).json(error.message);
        }
    }

}

module.exports = Controller