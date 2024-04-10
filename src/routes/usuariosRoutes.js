const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js');

const usuarioController = new UsuarioController();

const route = Router();

route.get('/rh_news/usuarios', (req, res) => {usuarioController.pegaTodosController(req, res)});
route.post('/rh_news/usuarios', (req, res) => {usuarioController.criaRegistroController(req, res)});
route.get('/rh_news/usuarios/:id', (req, res) => usuarioController.pegaUmRegistroPorIdController(req, res));
route.put('/rh_news/usuarios/:id', (req, res) => usuarioController.atulizaDadoController(req, res));
route.delete('/rh_news/usuarios/:id', (req, res) => usuarioController.excluiRegistroController(req, res));

module.exports = route;
