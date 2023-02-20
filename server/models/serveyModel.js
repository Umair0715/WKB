const mongoose = require('mongoose');

const serveySchema = new mongoose.Schema({
    member : {
        type : mongoose.Schema.ObjectId ,
        ref : 'Member' , 
        required : [true, 'Member id is required.'] 
    } , 
    name : {
        type : String , 
        required : [true, 'Name is required.'] ,
    } ,
    CNIC : {
        type : String , 
        default : null 
    } ,
    party : {
        type : String ,
        required : [true , 'Party name is required.']
    } ,
    votes : {
        type : Number , 
        required : [true , 'No of votes is required.']
    }
});

serveySchema.pre(/^find/ , function(next) {
    this.populate([
        {
            path : 'member',
            select : '-password'
        }
    ]);
    next();
})

const Servey = mongoose.model("Servey" , serveySchema);
module.exports = Servey;