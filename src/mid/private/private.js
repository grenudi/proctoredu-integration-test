const Express = require('express');
const app = Express();

app
.get("/classroom",(req,res)=>{
    res.send("AWESOME");
})
.get("/results",(req,res)=>{
    res.send("AWESOME");
});

module.exports = app;