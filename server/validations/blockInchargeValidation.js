const joi = require('joi');

const blockInchargeValidation = joi.object().keys({
    firstName : joi.string().required() , 
    lastName : joi.string().required() , 
    CNIC : joi.string().min(13).max(13).required() , 
    NA : joi.string().required() , 
    PP : joi.string().required() , 
    UC : joi.string().required() , 
    blockCode : joi.string().required() , 
    password : joi.string().required() , 
    blockCode : joi.string().required() , 
});

module.exports = blockInchargeValidation;