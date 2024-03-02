const Controller = require('./Controller');
const PostServices = require('../services/PostServices.js');

const postServices = new PostServices();

class PostController extends Controller {
  constructor() {
    super(postServices);
  }
}

module.exports = PostController;
