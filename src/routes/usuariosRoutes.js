const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js');

const usuarioController = new UsuarioController();

const route = Router();

route.get('/usuarios', (req, res) => usuarioController.pegaTodosController(req, res));

module.exports = route;
