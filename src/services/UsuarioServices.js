const Services = require("./Services.js");
const model = require('../models/index.js')
const bcrypt = require('bcrypt');

class UsuarioServices extends Services{
    constructor(){
        super('Usuario')
    }
    
    async pegaRegistroPorEmail(dado){
        const retorno = await model.Usuario.findOne({where: {email: dado}})
        if(retorno === null){
            console.log('registro não encontrado na base de dados');
            return {status:false, retorno: retorno};
        }else{
            console.log('registro foi encontrado na base de dados');
            return {status:true, retorno: retorno};
        }
    }
    async pegaRegistroPorUsuario(dado){
        const retorno = await model.Usuario.findOne({where: {usuario: dado}});
        if(retorno === null){
            console.log('registro não encontrado na base de dados');
            return {status:false, retorno: retorno};
        }else{
            console.log('registro foi encontrado na base de dados');
            return {status:true, retorno: retorno};
        }
    }
    async validaSenhaUsuario(usuario, senha){
        const retorno = await model.Usuario.findOne({
            attributes: ['email','usuario','senha'],
            where: {usuario: usuario}
        });
        if(retorno === null){
            console.log('registro não encontrado na base de dados');
            return {status:false, retorno: retorno};
        }
        const senhaIguais = await bcrypt.compare(senha, retorno.dataValues.senha);
        return senhaIguais;
    }
    async validaSenhaEmail(email, senha){
        const retorno = await model.Usuario.findOne({
            attributes: ['email','usuario','senha'],
            where: {email: email}
        });
        if(retorno === null){
            console.log('registro não encontrado na base de dados');
            return {status:false, retorno: retorno};
        }
        const senhaIguais = await bcrypt.compare(senha, retorno.dataValues.senha);
        return senhaIguais;
    }
    async CriaUsuario(dados){
        const usuario = await model.Usuario.create(dados)
        if(dados){
            console.log('service');
            return  usuario.dataValues
        }else{
            console.log('não foi possivel cadastrar o usuario');
        }
    }
}

module.exports = UsuarioServices