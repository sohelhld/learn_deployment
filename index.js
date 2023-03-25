const express = require('express');
const {connection}=require("./db")
const {userRouter} =require("./routes/user.routes")
const {noteRouter}=require("./routes/note.routes")
const {auth} =require("./middleware/auth.middleware")
const app =express()
app.use(express.json())

app.use("/users",userRouter)
//auth middleware
app.use(auth)
app.use("/notes",noteRouter)


app.listen(4500,async()=>{
    try {
        await connection
        console.log("connected to the db");
    } catch (err) {
        console.log("connot connect to db");
        console.log(err);
    }
    console.log("sever is runing");
    
})