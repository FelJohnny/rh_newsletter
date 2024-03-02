const { Router } = require('express');
const PostController = require('../controllers/PostController');

const postController = new PostController();

const route = Router();

route.post('/posts', (req, res) => {postController.criaRegistroController(req, res)});
route.get('/posts', (req, res) => {postController.pegaTodosController(req, res)});
route.get('/posts/:id', (req, res) => postController.pegaUmRegistroPorIdController(req, res));
route.put('/posts/:id', (req, res) => postController.atulizaDadoController(req, res));
route.delete('/posts/:id', (req, res) => postController.excluiRegistroController(req, res));





module.exports = route;
