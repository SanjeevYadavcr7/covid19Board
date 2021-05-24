const mongoose = require('mongoose');

const Form = mongoose.Schema({
    name:{type:String, required:true},
    city:{type:String, required:true},
    pin:{type:Number, required:true},
    phone:{type:Number, required:true, unique:true},
    help:{type:String, required:true},
})

module.exports = mongoose.model("Form", Form); 