const Controller = require('./Controller.js');
const PostServices = require('../services/PostServices.js');

const postServices = new PostServices();
const camposObrigatorios = ['titulo_post','descricao_post']

class PostController extends Controller {
  constructor() {
    super(postServices,camposObrigatorios);
  }
}

module.exports = PostController;
