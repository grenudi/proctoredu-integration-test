"use strict";
// Dependencies
const Express = require("express");
const app = Express();

const pdb = require("./pseudoDB/main.js");
const cfg = require("../package.json").CONFIG;
const https = require("./https/app-https");

const publica = require("./mid/public/public.js");
const imitateClient = require("./mid/mock/auth-client.js");
const privata = require("./mid/private/private.js");

pdb.set("proctorSecret","secret");
app
.get("/secretFromProctorEdu/:secret",(req,res)=>{
    pdb.set("proctorSecret", req.params.secret);
    res.send(`got the code: ${pdb.get("proctorSecret")}`);
})
.use(publica)
.use(imitateClient)//authwall can be used here
.use(privata);

https.wrap(app)
        .listen(cfg.server.https.port, () => {
            console.log(`HTTPS Server running on port ${cfg.server.https.port}`);
        });