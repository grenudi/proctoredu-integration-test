const Express = require('express');
const app = Express();

app
.get("/classroom:?examid",(req,res)=>{
    res.send("AWESOME");
})
.get("/classroom",(req,res)=>{
    //form examid
    res.send("AWESOME");
})
.get("/results:?examid",(req,res)=>{
    //form examid
    res.send("AWESOME");
})
.get("/results",(req,res)=>{
    res.send("AWESOME");
});

module.exports = app;