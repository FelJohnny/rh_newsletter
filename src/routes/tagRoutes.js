const {Router} = require('express');
const TagController = require('../controllers/TagController.js');


const tagController = new TagController()

const route = Router();


route.get('/tags', (req, res)=> tagController.pegaTodosController(req,res))

module.exports = route