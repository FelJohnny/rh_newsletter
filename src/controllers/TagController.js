const Controller = require("./Controller");
const TagServices = require("../services/TagServices.js")

const tagServices = new TagServices()

class tagController extends Controller{
    constructor(){
        super(tagServices)
    }
}


module.exports = tagController;