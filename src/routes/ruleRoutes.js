const { Router } = require('express');
const RuleController = require('../controllers/RuleController');

const ruleController = new RuleController();

const route = Router();

route.get('/rules', (req, res) =>
  ruleController.pegaTodosRegistroController(req, res),
);

module.exports = route;
