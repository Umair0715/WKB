const NA = require('../models/NA_Model');
const handlerFactory = require('./factories/handlerFactory');


exports.create = handlerFactory.createOne(NA);
exports.getAll = handlerFactory.getAll(NA);
exports.getOne = handlerFactory.getOne(NA);
exports.updateOne = handlerFactory.updateOne(NA);
exports.deleteOne = handlerFactory.deleteOne(NA);