const jwt = require("jsonwebtoken");


const wrap = app=>
    app.get("/api/token",(req,res)=>{

            const payload = {
                "username": "student1",
                "nickname": "Ivan Petrov",
                "template": "default",
                "id": "b3875623-e96a-4cf0-9d6d-828331bda025",
                "subject": "Test 1",
                "tags": ["Ivan Petrov"]
            };
            const secret = "secret";
            const options = {
                "algorithm": "HS256"
            };

            const token = jwt.sign(payload, secret, options)
            res.send(token);
        });

module.exports = {
    wrap
};