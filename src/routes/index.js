const express = require('express')
const tags = require('./tagRoutes')
module.exports = (app) =>{
    app.use(express.json(), tags)

};
