const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    item:[
        {
            productId:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Product",
                require:true
            },
            quantity:{
                type:Number,
                required:true
            },
        },
    ],
});
module.exports = mongoose.model("Cart",cartSchema);