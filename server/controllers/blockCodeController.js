const BlockCode = require('../models/blockCodeModel');
const handlerFactory = require('./factories/handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { sendErrorResponse } = require('../utils/helpers');


exports.create = catchAsync(async(req , res , next) => {
    const { code , UC , NA , PP } = req.body;
    if(!code || !NA || !PP || !UC) {
        return next(new AppError('All fields are required.' , 400))
    }
    const codeExist = await BlockCode.findOne({ code , UC , NA , PP });
    if(codeExist) {
        return next(new AppError('Block Code Already exist with same code , PP , UC and NA' , 400))
    }
    const newBlockCode = await BlockCode.create({ code , UC , NA , PP });
    return sendErrorResponse(res , 200 , {
        message : 'Created successfully.' , 
        doc : newBlockCode 
    });
});

exports.getAll = handlerFactory.getAll(BlockCode);
exports.getOne = handlerFactory.getOne(BlockCode);
exports.updateOne = handlerFactory.updateOne(BlockCode);
exports.deleteOne = handlerFactory.deleteOne(BlockCode);