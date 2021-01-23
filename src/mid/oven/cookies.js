const cp = require("cookie-parser");

const wrap = app=>
    app
    .use(cp())
    .use((req,res,next)=>{
        console.log("cookies from oven:",req.cookies);
        req.cookiesJWT = req.cookies;
        req.cookies = "COOKIES <<< INJECTED";
        next();
    });

module.exports = {
    wrap
};