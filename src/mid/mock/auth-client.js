const app = require("express")();
app
.use((req,res,next)=>{
    //inject session data to request
    req.cookies = {
        "username": "idunerga",
        "nickname": "grenudi",
        "template": "default",
        "subject": "demo proctorEdu",
        "tags": ["demo","proctorEdu","grenudi","idunerg"]
    }
    const examid = new Date().getTime();
    // console.log("USE MOCK --> set id to:", examid);
    req.cookies.exp = Math.round(new Date().getTime()/1000 + 3600);
    req.cookies.id = examid;
    req.cookies.role = "student"
    req.cookies.timeout = 1;

    next();
});

module.exports = app;