const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("Changes made in master");
})
//These changes are made in master branch 
app.listen(8080,(req,res)=>{
    console.log('server is up on port 8080');
})
