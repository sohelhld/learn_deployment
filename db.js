const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb+srv://sohel:nopass@cluster0.4rmgup6.mongodb.net/hashLecture?retryWrites=true&w=majority")


module.exports={connection}