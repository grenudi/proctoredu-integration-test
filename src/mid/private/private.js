const Express = require('express');
const app = Express();

app
.get("/classroom:?examid",(req,res)=>{
    res.send("AWESOME");
})
.get("/classroom",(req,res)=>{
    //form examid
    res.sendFile(__dirname+"/serve-routed/classroom.html");
})
.get("/results:?examid",(req,res)=>{
    res.send("AWESOME");
})
.get("/results",(req,res)=>{
    //form examid
    res.sendFile(__dirname+"/serve-routed/results.html");
});

module.exports = app;