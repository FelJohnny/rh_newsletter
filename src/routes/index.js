const express = require('express')
const tags = require('./tagRoutes.js')

module.exports = (app) =>{
    app.use( express.json(), tags )

};
