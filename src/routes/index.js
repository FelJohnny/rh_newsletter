const express = require('express');
const tags = require('./tagRoutes.js');
const rules = require('./ruleRoutes.js');
const usuarios = require('./usuariosRoutes.js');
const posts = require('./postRoutes.js')
const cors = require('cors');

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(tags, rules, usuarios, posts);

};
