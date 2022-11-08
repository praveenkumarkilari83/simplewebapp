const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("chages after Stash");
})

app.listen(8080,(req,res)=>{
    console.log('server is up on port 8080');
})
