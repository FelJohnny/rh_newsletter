
class Controller{
    constructor(propsServices){
        this.propsServices = propsServices
    }

    async pegaTodosRegistroController(req, res){
        try{
            const registroEncontrado = this.propsServices.pegaTodosRegistros()
            res.status(200).json(registroEncontrado)
        }catch(e){

        }
    }
}

module.exports = Controller