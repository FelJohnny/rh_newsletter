const express = require('express');
const tags = require('./tagRoutes.js');
const rules = require('./ruleRoutes.js');
const usuarios = require('./usuariosRoutes.js');
const posts = require('./postRoutes.js')

module.exports = (app) => {
  app.use( express.json());
  app.use(tags, rules, usuarios, posts);
};
