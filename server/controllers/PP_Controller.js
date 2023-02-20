const PP = require('../models/PP_Model');
const handlerFactory = require('./factories/handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { sendErrorResponse } = require('../utils/helpers');


exports.create = catchAsync(async(req , res , next) => {
    const { name , NA } = req.body;
    if(!name || !NA) {
        return next(new AppError('All fields are required.' , 400))
    }
    const PP_exist = await PP.findOne({ name , NA });
    if(PP_exist) {
        return next(new AppError('PP Already exist with same name and NA' , 400))
    }
    const newPP = await PP.create({ name , NA });
    return sendErrorResponse(res , 200 , {
        message : 'Created successfully.' , 
        doc : newPP 
    })
})

exports.getAll = handlerFactory.getAll(PP);
exports.getOne = handlerFactory.getOne(PP);
exports.updateOne = handlerFactory.updateOne(PP);
exports.deleteOne = handlerFactory.deleteOne(PP);