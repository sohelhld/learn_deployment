const express = require('express');
const {noteModel} =require("../model/note.model")
const noteRouter =express.Router()


noteRouter.get("/",async(req,res)=>{
    try {
        const notes =await noteModel.find()
        res.status(200).send(notes)
    } catch (err) {
        res.status(400).send({"msg":err.message})
    }
})

noteRouter.post("/add",async(req,res)=>{
    try {
        const note = new noteModel(req.body)
        await note.save()
        res.status(200).send({"msg":"new note has been added"})
    } catch (err) {
        res.status(400).send({"msg":"err.message"})
    }
    
})

noteRouter.patch("/update/:noteID",async(req,res)=>{
    const {noteID}=req.params
    const payload =req.body
    try {
        await noteModel.findByIdAndUpdate({_id:noteID},payload)
        res.status(200).send({"msg":" note has been updated"})
    } catch (err) {
        res.status(400).send({"msg":"err.message"})
    }
    
})

noteRouter.delete("/delete/:noteID",async(req,res)=>{
    const {noteID}=req.params
    try {
        await noteModel.findByIdAndDelete({_id:noteID})
        res.status(200).send({"msg":" note has been deleted"})
    } catch (err) {
        res.status(400).send({"msg":"err.message"})
    }
})

module.exports={
    noteRouter
}