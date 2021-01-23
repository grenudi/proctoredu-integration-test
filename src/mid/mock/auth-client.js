const app = require("express")();
app
.use((req,res,next)=>{
    //inject session data to request
    next();
});

module.exports = app;