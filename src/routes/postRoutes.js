const { Router } = require('express');
const PostController = require('../controllers/PostController');

const postController = new PostController();

const route = Router();

route.get('/posts', (req, res) => postController.pegaTodosRegistroController(req, res));

module.exports = route;
