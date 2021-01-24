const Express = require('express');
const app = Express();
const cfg = require("../../../package.json").CONFIG;
const pdb = require("../../pseudoDB/main.js");
const procjwt = require("../../services/proctoredu.js").jwt;

app
.post("/api/results",(req,res)=>{
    console.log(req);
    console.log("\n\npayload\n\n",req.body);
})
.get("/classroom/:examid",(req,res)=>{
    console.log("/classroom?:examid: ",req.cookies);
    if(pdb.sessions.isi(req.params.examid)){
        res.sendFile(__dirname+"/serve-routed/classroom.html");
    }else{
        res.set('location', `https://${cfg.server.domain.main}/401.html`);
        res.status(302).send();
    }
})
.get("/classroom",(req,res)=>{
    console.log("/classroom: ",req.cookies);
    const payload = {...req.cookies,
        referer: `https://${cfg.server.domain.main}/results/${req.cookies.id}`,
        url: `https://${cfg.server.domain.main}/classroom/${req.cookies.id}`,
        api: "https://${cfg.server.domain.main}/api/results"
    };
    const token = procjwt.enc(payload);

    pdb.sessions.add(req.cookies.id, new Date().getTime());

    console.log("TOKEN: ",token);
    res.set('location', `https://${cfg.serverProc.domains[0]}/api/auth/jwt?token=${token}`);
    res.status(308).send();
})
.get("/results/:examid",(req,res)=>{
    if(pdb.sessions.isi(req.params.examid)){
        res.sendFile(__dirname+"/serve-routed/results.html");
    }else{
        res.set('location', `https://${cfg.server.domain.main}/401.html`);
        res.status(302).send();
    }
})
// .get("/results",(req,res)=>{
//     //form examid
// });

module.exports = app;