const Controller = require("./Controller.js");
const TagServices = require("../services/TagServices.js")

const tagServices = new TagServices()
const camposObrigatorios = ['nome','status']

class TagController extends Controller{
    constructor(){
        super(tagServices,camposObrigatorios)
    }
}


module.exports = TagController;