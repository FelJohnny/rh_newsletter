const { Router } = require('express');
const RuleController = require('../controllers/RuleController.js');
const checkTokenLogin = require('../../middlewares/checkTokenLogin.js')

const ruleController = new RuleController();

const route = Router();

route.post('/rh_news/rules', checkTokenLogin,(req, res) => {ruleController.criaRegistroController(req, res)});
route.get('/rh_news/rules', checkTokenLogin,(req, res) => {ruleController.pegaTodosController(req, res)});
route.get('/rh_news/rules/:id', checkTokenLogin,(req, res) => ruleController.pegaUmRegistroPorIdController(req, res));
route.put('/rh_news/rules/:id', checkTokenLogin,(req, res) => ruleController.atulizaDadoController(req, res));
route.delete('/rh_news/rules/:id', checkTokenLogin,(req, res) => ruleController.excluiRegistroController(req, res));

module.exports = route;
