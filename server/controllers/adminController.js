const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { sendSuccessResponse } = require('../utils/helpers');
const signToken = require('../utils/signToken');
const sendCookie = require('../utils/sendCookies');
const userFactory = require('./factories/userFactory');
const handlerFactory = require('./factories/handlerFactory');
const Admin = require('../models/adminModel');
const generateUsername = require('../utils/generateUsername');
const blockInchargeValidation = require('../validations/blockInchargeValidation');
const BlockIncharge = require('../models/blockInchargeModel');
const Member = require('../models/memberModel');

exports.register = catchAsync(async(req , res , next) => {
    const { firstName , lastName , password } = req.body;
    const adminExist = await Admin.find();
    if(adminExist.length > 0 ){
        return next(new AppError('Admin already exist.' , 400))
    }
    const username = await generateUsername(Admin , firstName + lastName )
    const newAdmin = await Admin.create({
        firstName , lastName , username , password 
    });
    const token = signToken({ _id : newAdmin._id });
    sendCookie(res , token);
    sendSuccessResponse(res , 201 , {
        message : 'Admin created successfully.' ,
        doc : newAdmin ,
        token 
    })
});

exports.updateProfile = catchAsync(async(req , res , next) => {
    if(req.body.username){
        return next(new AppError('You cannot update username.' , 400))
    }
    const updatedAdmin = await Admin.findByIdAndUpdate(req.user._id , req.body , {
        new : true , 
        runValidators : true 
    });
    if(!updatedAdmin) return next(new AppError('InValid id. Document not found.' , 400));
    sendSuccessResponse(res , 200 , {
        message : 'Updated successfully.' ,
        doc : updatedAdmin 
    })
});

exports.login = userFactory.login(Admin)
exports.getProfile = userFactory.profile(Admin);

exports.createBlockIncharge = userFactory.createUser(BlockIncharge , blockInchargeValidation);

exports.getAllBlockIncharges = handlerFactory.getAll(BlockIncharge);
exports.getOneBlockIncharge = handlerFactory.getOne(BlockIncharge);
exports.updateBlockIncharge = handlerFactory.updateOne(BlockIncharge);
exports.deleteBlockIncharge = handlerFactory.deleteOne(BlockIncharge);

exports.getBlockInchargeTeamMembers = handlerFactory.getTeamMembers(Member);

