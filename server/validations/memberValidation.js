const joi = require('joi'); 

const memberValidation = joi.object().keys({
    firstName : joi.string().required().min(3).max(15) ,
    lastName : joi.string().required().min(1).max(15) ,
    password : joi.string().required() , 
    CNIC : joi.string().min(13).max(13).required() ,
    blockIncharge : joi.string().required()      
});

module.exports = memberValidation;