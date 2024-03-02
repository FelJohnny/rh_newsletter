const express = require('express');
const tags = require('./tagRoutes.js');
const rules = require('./ruleRoutes.js');
const usuarios = require('./usuariosRoutes.js');

module.exports = (app) => {
  app.use(express.json(), tags, rules, usuarios);
};
