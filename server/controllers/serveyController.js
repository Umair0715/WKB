const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const Servey = require('../models/serveyModel')
const { sendSuccessResponse } = require('../utils/helpers')
const serveyDataValidation = require('../validations/serveyDataValidation')
const handlerFactory = require('./factories/handlerFactory')

exports.addServeyData = handlerFactory.createOne(
  Servey,
  serveyDataValidation,
)

exports.getAllServeyData = handlerFactory.getAll(Servey);

exports.getSingleMemberServeyData = catchAsync(async (req, res, next) => {
    const { memberId } = req.params;
    const pageSize = req.query.pageSize || 10;
    const page = req.query.page || 1;
    const sort = req.query.sort || -1; 
    const docsCount = await Servey.countDocuments({ member : memberId });
    const docs = await Servey.find({ member : memberId })
    .populate('member' , '-__v -createdAt -updatedAt -password')
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({createdAt : sort })
    const pages = Math.ceil(docsCount/pageSize);
    return sendSuccessResponse(res , 200 , {
        docs , docsCount , pages , page 
    })
});
