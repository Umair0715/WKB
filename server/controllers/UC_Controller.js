const UC = require('../models/UC_Model');
const handlerFactory = require('./factories/handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { sendErrorResponse } = require('../utils/helpers');


exports.create = catchAsync(async(req , res , next) => {
    const { name , NA , PP } = req.body;
    if(!name || !NA || !PP) {
        return next(new AppError('All fields are required.' , 400))
    }
    const UC_exist = await UC.findOne({ name , NA , PP });
    if(UC_exist) {
        return next(new AppError('UC Already exist with same name , PP and NA' , 400))
    }
    const newUC = await UC.create({ name , NA , PP });
    return sendErrorResponse(res , 200 , {
        message : 'Created successfully.' , 
        doc : newUC 
    })
})

exports.getAll = handlerFactory.getAll(UC);
exports.getOne = handlerFactory.getOne(UC);
exports.updateOne = handlerFactory.updateOne(UC);
exports.deleteOne = handlerFactory.deleteOne(UC);