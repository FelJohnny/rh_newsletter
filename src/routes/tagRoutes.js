const {Router} = require('express');
const TagController = require('../controllers/TagController');


const tagController = new TagController()

const route = Router();


route.get('/tags', (req, res)=> tagController.pegaTodosRegistroController(req,res))

module.exports = route