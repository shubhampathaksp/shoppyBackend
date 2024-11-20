const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
Name:{
    type:String,
    required:true
},
Price:{
    type:Number,
    required:true
},
Description:{
    type:String,
    required:true
},
Stock:{
    type:Number,
    required:true
}
})
module.exports = mongoose.model('Product',productSchema);