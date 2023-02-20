const mongoose = require('mongoose');

const usSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true ,
        index : true 
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

usSchema.pre(/^find/ , function(next) {
    this.populate([
        {
            path : 'NA' ,
            select : '-__v'
        } ,
        {
            path : 'PP' ,
            select : '-__v -NA'
        }
    ]);
    next();
})

const UC = mongoose.model('UC' , usSchema);
module.exports = UC ;