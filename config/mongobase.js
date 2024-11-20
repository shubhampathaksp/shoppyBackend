const mongoose = require("mongoose");
 
require("dotenv").config();
const mongConnect =  ()=>{
 mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}) 
.then(()=>{
    console.log("Mongo connected");
})
.catch((error)=>{
    console.log('Mongo is not connected');
    console.log(error);
})
}
module.exports = mongConnect;