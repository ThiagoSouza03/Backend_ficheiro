class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }
    async buscaTodosUsuarios(req, res) {
        try {
            const listaDeUsuarios = await this.entidadeService.buscaTodosUsuarios()
            return res.status(200).json(listaDeUsuarios)
        } catch (error) {

        }
    }
    async criaRegistro(req , res){
        const dadosUsuario = req.body;
        try {
            const novoUsuarioCriado = await this.entidadeService.criaRegistro(dadosUsuario)
            return res.status(201).json(novoUsuarioCriado)
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }

}

module.exports = Controller