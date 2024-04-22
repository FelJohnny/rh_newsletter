const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js');
const checkTokenLogin = require('../../middlewares/checkTokenLogin.js')
const usuarioController = new UsuarioController();

const route = Router();

route.get('/rh_news/usuarios/auth/', checkTokenLogin,(req, res) => {usuarioController.pegaTodosController(req, res)});
route.post('/rh_news/usuarios/auth/register', (req, res) => {usuarioController.criarUsuarioController(req, res)});
route.post('/rh_news/usuarios/auth/login', (req, res) => {usuarioController.loginUsuarioController(req, res)});
route.get('/rh_news/usuarios/auth/:id', checkTokenLogin,(req, res) => usuarioController.pegaUmRegistroPorIdController(req, res));
route.put('/rh_news/usuarios/auth/:id', checkTokenLogin,(req, res) => usuarioController.atulizaDadoController(req, res));
route.delete('/rh_news/usuarios/auth/:id', checkTokenLogin,(req, res) => usuarioController.excluiRegistroController(req, res));


module.exports = route;
