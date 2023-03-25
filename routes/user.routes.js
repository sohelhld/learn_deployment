const express = require('express');

const {userModel}= require("../model/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const userRouter = express.Router()



userRouter.post("/register",async(req,res)=>{
    const {email,pass,location,age}=req.body
    try {
        bcrypt.hash(pass, 5, async(err, hash)=> {
            try {
                const user = new userModel({email,pass:hash,location,age})
                await user.save()
                res.status(200).send({"msg":"Regiter has been done"})
            } catch (err) {
                res.status(400).send({"msg":"Regiter has NOT done"})
            }
           
        });

    } catch (err) {
        console.log(err);
        res.status(400).send({"msg":"Regiter has been NOT done"})
    }
    
})

userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    try {
        const user= await userModel.find({email})
       // console.log(user);
        if(user){
            bcrypt.compare(pass, user[0].pass, async(err, result)=> {
                if(result){
                   res.status(200).send({"msg":"login succesfull!","token":jwt.sign({ "course": 'backend' }, 'masai')}) 
                }else{
                   res.status(400).send({"msg":"login failed!"})
                }
           });
        }
        
    } catch (err) {
        console.log(err);
        res.status(400).send({"msg":"login has been NOT done"})
    }
    // res.send("login is succesful")
})

// userRouter.get("/details",async(req,res)=>{
//     // const {token} = req.query
//     const token = req.headers.authorization
//     try {
//         jwt.verify(token, 'shhhhh', (err, decoded)=> {
//             decoded?  res.status(200).send({"msg":"user"}):
//             res.status(400).send({"msg":"token dont match!"})
//         });
        
//     } catch (err) {
//         console.log(err);
//         res.status(400).send(err.message)
//     }
// })


module.exports={
    userRouter
}