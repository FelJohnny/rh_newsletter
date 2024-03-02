const Controller = require('./Controller');
const UsuarioServices = require('../services/UsuarioServices.js');

const usuarioServies = new UsuarioServices();

class UsuarioController extends Controller {
  constructor() {
    super(usuarioServies);
  }
}

module.exports = UsuarioController;