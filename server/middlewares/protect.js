const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const jwt = require('jsonwebtoken');

exports.protect = (Model) => catchAsync(async(req , res , next) => {
   let token ;
   if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      token = req.headers.authorization.split(' ')[1];
   }else{
      token = req.cookies.token;
   }
   if(!token){
      return next(new AppError("you're not logged in. please login to get access" , 400))
   }
   const decoded = jwt.verify(token , process.env.JWT_SECRET);
   const { _id } = decoded ;
   const user = await Model.findById(_id);
   if(!user){
      return next(new AppError('Access denied. UnAuthorized user.' , 400));
   }
   req.user = user;
   next();
})


exports.restrictTo = (type) =>{
   return (req , res, next) =>{
      if(req.user.role !== type){
         return next(new AppError('You do not have permission to perform this action' , 403));
      }
      next();
   }
}