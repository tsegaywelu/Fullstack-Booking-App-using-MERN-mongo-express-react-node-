const mongoose=require('mongoose');
const users=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
})
const Usermodel = mongoose.model('user',users)
module.exports=Usermodel;