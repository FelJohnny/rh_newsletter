const Controller = require('./Controller');
const RuleServices = require('../services/RuleServices.js');

const ruleServices = new RuleServices();

class ruleController extends Controller {
  constructor() {
    super(ruleServices);
  }
}

module.exports = ruleController;
