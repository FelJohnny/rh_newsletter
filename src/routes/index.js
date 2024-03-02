const express = require('express');
const tags = require('./tagRoutes.js');
const rules = require('./ruleRoutes.js');

module.exports = (app) => {
  app.use(express.json(), tags, rules);
};
