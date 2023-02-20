const joi = require('joi');

const serveyDataValidation = joi.object().keys({
    name : joi.string().required() , 
    member : joi.string().required() ,
    party : joi.string().required() ,
    votes : joi.number().required() ,
    CNIC : joi.string().min(13).max(13)
});

module.exports = serveyDataValidation;