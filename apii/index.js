const express=require('express')
const app=express()
const cors=require('cors')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const key="well come"//the sekret key for decode and incode  token
const secret=bcrypt.genSaltSync(12)  //for salting 
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}));
require('dotenv').config();
const mongoose=require('mongoose');
const Usermodel = require('./models/user');
mongoose.connect(process.env.MONGO_URL)
.then(d=>console.log("conected")).catch(e=>console.log(e))
app.use(express.json())
const port=3000
//Ibb40zscNN8DAD66 ppsword of attlas
Usermodel
app.post('/logintopage',async(req,res)=>{

    const {email,password}=req.body;
   const userdoc=await Usermodel.findOne({email})
   if(userdoc){
    const passwordok=bcrypt.compareSync(password,userdoc.password)
    if(passwordok){
        
        const token = jwt.sign({email:userdoc.email,id:userdoc._id},key,{
            expiresIn: '24h'
        })
            
        
        console.log("wellcome"+userdoc.name)
        res.status(200).json({token})

    }
    else{
        res.json({shg:"dsfnrbfuirbfufw"})
    }
   }
   else{
   res.json({tse:"no user with this email"})
   console.log("not user");
   }
})
app.post('/register',async (req,res)=>{
    const {name,email,password}=req.body;
   const response=await Usermodel.create({
        name,
        email,
        password:bcrypt.hashSync(password,secret)//see secret above it is salting
    })
    console.log(response)

   
     
    res.json({name,email,password})
})
app.get('/',(req,res)=>{
    res.send("hello tsegay")


})
//middle ware function 
async function middl(req,res,next){
   const token =JSON.parse(req.headers.token).token

   console.log(token)
   if(!token){
    return res.status(401).json({error:true,message:'invalid '})
   }
   else{
    const userinfo=jwt.verify(token,key)
   const user=await Usermodel.find({email:userinfo.email})//because email is unique
   if(!user){
    return res.json({error:true,message:'tocon coming but no user '})//return exists the whole function
   }
   next()

   }
}
app.get('/home',middl,(req,res)=>{
    console.log("wellcome you are our user ok");
    res.json("secss you loged in thanks ")
})

app.listen(port,()=>{
    console.log("server running on 3000");
})