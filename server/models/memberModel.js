const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const memberSchema = new mongoose.Schema({
    blockIncharge : {
        type : mongoose.Schema.ObjectId , 
        ref : 'BlockIncharge' ,
        required : true 
    } ,
    firstName : {
        type : String ,
        required : true 
    } ,
    lastName : {
        type : String , 
        required : true 
    },
    phone : {
        type : String ,
        default : null 
    } ,
    CNIC : {
        type : String , 
        minLength : 13 ,
        maxLength : 13 ,
        required : true 
    } , 
    username : {
        type : String ,
        required : true 
    } ,    
    password : {
        type : String ,
        required : true ,
    } ,
    role : {
        type : Number ,
        default : 2 ,
    }
    // 0 = Admin , 1 = Block incharge , 2 = Team member
} , { timestamps : true });


memberSchema.pre('save' , async function(next) {
    if(!this.isModified('password')) return ;
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

memberSchema.methods.comparePassword = async function(givenPassword) {
    return await bcrypt.compare(givenPassword , this.password);
}

memberSchema.pre(/^find/ , function(next) {
    this.populate([
        {
            path : 'blockIncharge' ,
            select : '-__v -password -updatedAt'
        } ,
    ]);
    next();
});

const Member = mongoose.model('Member' , memberSchema);
module.exports = Member;
