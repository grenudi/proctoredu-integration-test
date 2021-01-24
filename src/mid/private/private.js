const Express = require('express');
const app = Express();
const cfg = require("../../../package.json").CONFIG;
const pdb = require("../../pseudoDB/main.js");
const procjwt = require("../../services/proctoredu.js").jwt;

app
.post("/api/results",(req,res)=>{

})
.get("/classroom?:examid",(req,res)=>{
    if(pdb.sessions.isi(req.query.examid)){
        res.sendFile(__dirname+"/serve-routed/classroom.html");
    }else{
        res.set('location', `https://${cfg.server.domain.main}/401.html`);
        res.status(302).send();
    }
})
.get("/classroom",(req,res)=>{
    const payload = Object.create({...req.cookies,
        referer: `https://${cfg.server.domain.main}/results?examid=${req.cookies.id}`,
        url: `https://${cfg.server.domain.main}/classroom?examid=${req.cookies.id}`,
        api: "https://${cfg.server.domain.main}/api/results"
    })
    const token = procjwt.enc(payload);

    pdb.sessions.add(req.cookies.id, token);

    res.set('location', `https://${cfg.serverProc.domains[0]}/api/auth/jwt?token=${token}`);
    res.status(308).send();
})
.get("/results:?examid",(req,res)=>{
    res.send("AWESOME");
})
.get("/results",(req,res)=>{
    //form examid
    res.sendFile(__dirname+"/serve-routed/results.html");
});

module.exports = app;