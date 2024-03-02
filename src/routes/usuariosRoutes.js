const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const usuarioController = new UsuarioController();

const route = Router();

route.get('/usuarios', (req, res) =>
  usuarioController.pegaTodosRegistroController(req, res),
);

module.exports = route;
