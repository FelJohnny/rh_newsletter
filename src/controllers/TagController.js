const Controller = require("./Controller");
const TagServices = require("../services/TagServices.js")

const tagServices = new TagServices()

class TagController extends Controller{
    constructor(){
        super(tagServices)
    }
}


module.exports = TagController;