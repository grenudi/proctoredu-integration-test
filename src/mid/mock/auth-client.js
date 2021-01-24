const app = require("express")();
app
.use((req,res,next)=>{
    //inject session data to request
    req.cookies = {
        "username": "idunerg",
        "nickname": "grenudi",
        "template": "default",
        "subject": "demo proctorEdu",
        "tags": ["demo","proctorEdu","grenudi","idunerg"]
    }
    const examid = encodeURI(new Date());
    req.cookies.id = examid;
    req.cookies.role = "student"

    next();
});

module.exports = app;