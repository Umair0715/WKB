const mongoose = require('mongoose');

const ppSchema = new mongoose.Schema({
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
    createdAt : {
        type : Date ,
        default : new Date() 
    }
});

ppSchema.pre(/^find/ , function(next) {
    this.populate({
        path : 'NA' ,
        select : '-__v'
    });
    next();
})

const PP = mongoose.model('PP' , ppSchema);
module.exports = PP ;