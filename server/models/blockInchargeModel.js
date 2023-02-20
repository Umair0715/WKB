const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const blockInchargeSchema = new mongoose.Schema({
    username : {
        type : String , 
        required : true ,
    } ,
    firstName : {
        type : String , 
        required : true 
    } ,
    lastName : {
        type : String ,
        required : true 
    } ,
    phone : {
        type : String , 
        default : null , 
    } , 
    CNIC : {
        type : String , 
        required : true ,
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
    UC : {
        type : mongoose.Schema.ObjectId ,
        ref : 'UC' , 
        required : true 
    } , 
    blockCode : {
        type : mongoose.Schema.ObjectId ,
        ref : 'BlockCode' , 
        required : true 
    } , 
    password : {
        type : String , 
        required : true 
    } , 
    role : {
        type : Number , 
        default : 1 , 
    }
    // 0 = Admin , 1 = Block incharge , 2 = Team member
} , { timestamps : true });

blockInchargeSchema.pre('save' , async function(next) {
    if(!this.isModified('password')) return ;
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

blockInchargeSchema.methods.comparePassword = async function(givenPassword) {
    return await bcrypt.compare(givenPassword , this.password);
}

blockInchargeSchema.pre(/^find/ , function(next) {
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
        } , 
        {
            path : 'blockCode' , 
            select : '-__v -NA -PP -UC'
        }
    ]);
    next();
});

const BlockIncharge = mongoose.model('BlockIncharge' , blockInchargeSchema);
module.exports = BlockIncharge;