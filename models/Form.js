const mongoose = require('mongoose');

const Form = mongoose.Schema({
    name:{type:String},
    city:{type:String},
    pin:{type:Number},
    phone:{type:Number},
    help:{type:String},
})

module.exports = mongoose.model("Form", Form); 