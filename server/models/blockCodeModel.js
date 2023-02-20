const mongoose = require('mongoose');

const blockCodeSchema = new mongoose.Schema({
    code : {
        type : String , 
        required : true 
    } , 
    UC : {
        type : mongoose.Schema.ObjectId , 
        ref : "UC" , 
        required : true 
    } , 
    NA : {
        type : mongoose.Schema.ObjectId ,
        ref : 'NA' , 
        required : true 
    } ,
    PP : {
        type : mongoose.Schema.ObjectId ,
        ref : 'PP' , 
        required : true
    } ,
    createdAt : {
        type : Date ,
        default : new Date() 
    }
});

blockCodeSchema.pre(/^find/ , function(next) {
    this.populate([
        {
            path : 'NA' ,
            select : '-__v'
        } ,
        {
            path : 'PP' ,
            select : '-__v -NA'
        } , 
        {
            path : 'UC' , 
            select : '-__v -NA -PP'
        }
    ]);
    next();
});

const BlockCode = mongoose.model('BlockCode' , blockCodeSchema);
module.exports = BlockCode ;