const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : true ,
    } ,
    firstName : {
        type : String ,
        required : true ,
        default : null ,
        minLength : 3 ,
        maxLenght : 15 ,
    } , 
    lastName : {
        type : String ,
        required : true ,
        default : null ,
        minLength : 1 ,
        maxLenght : 15 
    } ,
    email : {
        type : String ,
        default : null 
    } , 
    image : {
        type : String , 
        required : true 
    } ,
    phone : {
        type : String ,
        required : true ,
    } ,
    password : {
        type : String , 
        required : true 
    } ,
    fcmToken : {
        type : String ,
        default : null 
    } ,
    blockCode : {
        type : String ,
        required : true 
    }
} , { timestamps : true });


userSchema.pre('save' , async function(next) {
    if(!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password , 10);
    next();
});

userSchema.methods.comparePassword = async function (givenPassword) {
    return await bcrypt.compare(givenPassword , this.password)
}

const User = mongoose.model('User' , userSchema);
module.exports = User;