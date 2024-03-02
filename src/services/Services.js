const model = require('../models')

class Services{
        constructor(nomeModel){
            this.nomeModel = nomeModel;
        }
    async pegaTodosRegistros(){
        const regEncontrados = await model[this.nomeModel].findAll()
        return regEncontrados;
    }
}


module.exports = Services