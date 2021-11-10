const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [ true , "Name must be provied"],
        maxlength: [ 20 , "Name must not be more than 20 characters"],
        trim : true
    },
    completed:{
        type: Boolean,
        default: false ,
        
    }
}) // define structure for collection

module.exports = mongoose.model('Task' , TasksSchema )