const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
    firstName : {
        type : String ,
        required : true ,
    } ,
    lastName : {
        type : String , 
        default : null 
    } , 
    username : {
        type : String , 
        required : true 
    } ,
    password : {
        type : String ,
        required : true 
    } ,
    role : {
        type : Number , 
        default : 0 , 
        // 0 = Admin , 1 = Block incharge , 2 = Team member
    }

 } , { timestamps : true });

adminSchema.pre('save' , async function(next) {
    if(!this.isModified('password')) return ;
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

adminSchema.methods.comparePassword = async function(givenPassword) {
    return await bcrypt.compare(givenPassword , this.password);
}

const Admin = mongoose.model('Admin' , adminSchema);
module.exports = Admin;