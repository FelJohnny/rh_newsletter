const Controller = require('./Controller.js');
const UsuarioServices = require('../services/UsuarioServices.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usuarioServies = new UsuarioServices();
const camposObrigatorios = ['usuario','senha','status','email','rule_id']

class UsuarioController extends Controller {
  constructor() {
    super(usuarioServies,camposObrigatorios);
  }

  async criarUsuarioController(req, res){
    const bodyReq = req.body;
    try {
      const isTrue = await this.allowNull(req, res);
      
      if(isTrue.status){
        //checar se o usuario existe no banco
        const emailExist = await usuarioServies.pegaRegistroPorEmail(bodyReq.email)
        const userExist = await usuarioServies.pegaRegistroPorUsuario(bodyReq.usuario)

        if(emailExist.status || userExist.status){
          return res.status(422).json({
            message:"Usuario ou Email ja cadastrados, por favor utilize outro!",
            error:true
          });
        }
        // geranddo sequência de caracteres aleatória que é misturada com a senha antes de ser passada pelo algoritmo de hash
        const salt = await bcrypt.genSalt(12);
        //unindo e gerando senha hash
        const senhaHash = await bcrypt.hash(bodyReq.senha, salt);
        //sobrescrevendo senha cripto
        bodyReq.senha = senhaHash
        
        const usuarioCriado = await usuarioServies.CriaUsuario(bodyReq);
        return res.status(201).json({message:'deu certo',usuario: usuarioCriado})
      }
    } catch (e) {
      return res.status(500).json({ message: `erro ao criar, mensagem do erro:${e}` });
      
    }


  }

  async loginUsuarioController(req, res){
    const {email, usuario, senha} = req.body;
    let emailExist =''
    let userExist =''
    
    if(!senha){
      return res.status(422).json({message:"Por favor, insira uma senha!"});
    }
    if(!email && !usuario){
      return res.status(422).json({message:"preencha um usuario ou email"});
    }
    //validando existencia no banco
    if(usuario){
      userExist = await usuarioServies.pegaRegistroPorUsuario(usuario);
    }else{
      emailExist = await usuarioServies.pegaRegistroPorEmail(email);
    }

    if(emailExist.status || userExist.status){
      //checar se a senha cripto confere
      let checkSenha ='';
      if(userExist.status){
        //comparando
        checkSenha = await usuarioServies.validaSenhaUsuario(usuario, senha);
      }else{
        //comparando
        checkSenha = await usuarioServies.validaSenhaEmail(email, senha);
      }

      if(!checkSenha){
        return res.status(404).json({message:"Senha informada Invalida!"});
      }

      try {

        const secret = process.env.SECRET_LOGIN;
        let token=''
        const TokenExpirationTime = '1d'
        if(userExist.status){
          token = jwt.sign({
            id: userExist.retorno.dataValues.id,
            rule: userExist.retorno.dataValues.rule_id,
            status: userExist.retorno.dataValues.status
          },secret,{ expiresIn: TokenExpirationTime })
        }else{
          token = jwt.sign({
            id: emailExist.retorno.dataValues.id,
            rule: emailExist.retorno.dataValues.rule_id,
            status: emailExist.retorno.dataValues.status
          },secret,{ expiresIn: TokenExpirationTime })
        }
        return res.status(200).json({message:"Autentiação realizada com sucesso",token})
      } catch (e) {
        console.log(e);
        return res.status(500).json({ message: `erro ao logar, mensagem do erro:${e}` });
      }




    }
  }

}


module.exports = UsuarioController;
