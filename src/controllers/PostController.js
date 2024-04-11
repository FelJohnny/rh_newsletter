const Controller = require('./Controller.js');
const PostServices = require('../services/PostServices.js');
const model = require('../models/index.js');

const postServices = new PostServices();
const camposObrigatorios = ['titulo_post','descricao_post','tag_id','usuario_post_id']

class PostController extends Controller {
  constructor() {
    super(postServices,camposObrigatorios);
  }

  async criaPostController(req,res){
    try {
      const isTrue = await this.allowNull(req, res);

      const imgPost = req.file
      if(req.file){
        if(isTrue.status){
          const dadosParaCriacao = req.body;
          const novoRegistroCriado = model.Post.create(
            {
              titulo_post:dadosParaCriacao.titulo_post,
              descricao_post:dadosParaCriacao.descricao_post,
              anexo_post:dadosParaCriacao.anexo_post,
              img_post:imgPost.filename,
              tag_id:dadosParaCriacao.tag_id,
              usuario_post_id:dadosParaCriacao.usuario_post_id,
            }
          ).then((post)=>{
            return res.status(200).json({
              message:`Post criado com sucesso!`,
              error: false,
              post
            });
          });
          }else{
          return res.status(500).json({
            message: 'Preencha todos os campos necessarios',
            campos: isTrue.campos,
            error: true,
          });
        }
      }else{
        return res.status(400).json({message:"não foi possivel criar o post, verifique o arquivo anexado",error: true})
      }
    } catch (e) {
      return res.status(400).json({message:`não foi possivel criar o post,${e}`,error: true})

    }
  }
  async pegaTodosPostController(req,res){
    const listaDePosts = await model.Post.findAll({
      attributes:[
        'id',
        'titulo_post',
        'descricao_post',
        'anexo_post',
        'img_post',
        'createdAt',
        'updatedAt',
        'tag_id',
        'usuario_post_id',
        [model.sequelize.fn('CONCAT',process.env.URL_ADM + '/public/uploads/images/',model.sequelize.col('img_post')),'img_posts']
      ],
      order:[['id','DESC']]
    })
    if(listaDePosts){
      return res.status(200).json(listaDePosts);
    }else{
      return res.status(400).json("erro: nenhum post encontrado");

    }
  }
}



module.exports = PostController;
