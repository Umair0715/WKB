const mongoose = require('mongoose');

const naSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true ,
        index : true 
    } ,
    createdAt : {
        type : Date ,
        default : new Date() 
    }
});

const NA = mongoose.model('NA' , naSchema);
module.exports = NA ;