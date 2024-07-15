const express = require('express');
const app = express();

app.get('/home',(req,res)=>{res.send("Hello World Suman")})
app.listen(3000,()=>{
    console.log("listening at port 3000")
})