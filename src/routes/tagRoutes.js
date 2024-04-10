const {Router} = require('express');
const TagController = require('../controllers/TagController.js');


const tagController = new TagController()

const route = Router();


route.post('/rh_news/tags', (req, res) => {tagController.criaRegistroController(req, res)});
route.get('/rh_news/tags', (req, res) => {tagController.pegaTodosController(req, res)});
route.get('/rh_news/tags/:id', (req, res) => tagController.pegaUmRegistroPorIdController(req, res));
route.put('/rh_news/tags/:id', (req, res) => tagController.atulizaDadoController(req, res));
route.delete('/rh_news/tags/:id', (req, res) => tagController.excluiRegistroController(req, res));

module.exports = route