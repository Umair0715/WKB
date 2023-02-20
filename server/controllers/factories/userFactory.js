const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');
const { sendSuccessResponse } = require('../../utils/helpers');
const signToken = require('../../utils/signToken');
const sendCookie = require('../../utils/sendCookies');
const generateUsername = require('../../utils/generateUsername');


exports.createUser = (Model , docValidation ) => catchAsync(async(req , res , next) => {
    const { firstName , lastName  } = req.body;
    const { error } = docValidation.validate(req.body);
    if(error){
        return next(new AppError(error.details[0].message , 400))
    }
    const username = await generateUsername(Model , firstName + lastName);
    const doc = await Model.create({...req.body , username  })
    sendSuccessResponse(res , 201 , {
        message : 'Created successfully.' ,
        doc  
    });
});

exports.login = Model => catchAsync(async(req , res , next) => {
    const { username , password } = req.body;
    if(!username || !password){
        return next(new AppError('All fields are required.' , 400))
    }
    const doc = await Model.findOne({ username });
    if(!doc || !(await doc.comparePassword(password))){
        return next(new AppError('Wrong email or password'));
    }
    const token = signToken({ _id : doc._id });
    sendCookie(res , token);
    doc.password = '';
    return sendSuccessResponse(res , 200 , {
        message : 'Logged in successfully.' ,
        doc , 
        token 
    })
})

exports.profile = Model => catchAsync(async(req , res ,next) => {
    const doc = await Model.findById(req.user._id);
    if(!doc) return next(new AppError('InValid id. Document not found.' , 404));
    doc.password = '';
    return sendSuccessResponse(res , 200 , {
        doc 
    })
});

exports.updateProfile = Model => catchAsync(async(req , res , next) => {
    const id = req.user._id;
    if(req.body.username){
        return next(new AppError('You cannot update username.' , 400))
    }
    const updatedDoc = await Model.findByIdAndUpdate(id , req.body , {
        new : true ,
        runValidators : true 
    });
    if(!updatedDoc) return next(new AppError('Invalid id provided.' , 404))
    return sendSuccessResponse(res , 200 , {
        message : 'Document updated successfully.',
        doc : updatedDoc
    })
})

exports.logout = Model => (req , res , next) =>{
    res.cookie('token' , 'loggedOut' , {
        expires : new Date(Date.now() + 10 * 1000), 
        httpOnly : true 
    });
    return sendSuccessResponse(res , 200 , {
        message : 'Logged out successfully.'
    })
}