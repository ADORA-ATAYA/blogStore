const mongoose = require('mongoose')

//define schema (field)
const ContactSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

//create collection
const ContactModel = mongoose.model('contact',ContactSchema)  //collection name:categiry , collection field:Categoryschema

module.exports = ContactModel