const Controller = require('./Controller.js');
const UsuarioServices = require('../services/UsuarioServices.js');

const usuarioServies = new UsuarioServices();
const camposObrigatorios = ['usuario','senha','status','email']

class UsuarioController extends Controller {
  constructor() {
    super(usuarioServies,camposObrigatorios);
  }
}

module.exports = UsuarioController;
