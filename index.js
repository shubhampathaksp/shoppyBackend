const express = require("express");
const dbConnect = require("./config/mongobase")
const errors = require("./middlewares/error");
require('dotenv').config();
const app = express();
const allRoutes = require("./routes/Allroutes");

app.get('/',(req,res)=>{
    res.send("welcome the shoppyBackend page");
})
app.use(express.json());
app.use('/api/v1',allRoutes);

app.use(errors);
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`App started succesfully port:${port}`);
})
dbConnect();