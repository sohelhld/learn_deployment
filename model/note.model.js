const mongoose = require('mongoose');


//note scehms

const noteSchema = mongoose.Schema ({
    title : String,
    body:String,
    sub:String
},{
    versionKey:false
})

const noteModel = mongoose.model("note",noteSchema)

module.exports={
    noteModel
}